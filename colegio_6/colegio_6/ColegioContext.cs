﻿using colegio_6.modelos;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace colegio_6
{
    class ColegioContext : DbContext
    {
        public ColegioContext() : base("name=Colegio")
        {
            Database.SetInitializer(
               new DropCreateDatabaseIfModelChanges<ColegioContext>());
        }

        public DbSet<Alumno> Alumnos { get; set; }
        public DbSet<Profesor> Profesors { get; set; }
        public DbSet<Curso> Cursos { get; set; }

        // CONFIGURACIÓN PARA FLUENT API
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("administracion");

            modelBuilder.Entity<Curso>().ToTable("Materias"); // esquema por defecto
            modelBuilder.Entity<Profesor>().ToTable("Prosor", "personal");
            modelBuilder.Entity<Alumno>().ToTable("Estudiantes");

            modelBuilder.Entity<Curso>().HasKey(x => x.curso_PK);
            modelBuilder.Entity<Profesor>().HasKey(x => x.profesor_PK);
            modelBuilder.Entity<Alumno>().HasKey(x => x.alumno_PK);

            modelBuilder.Entity<Profesor>()
               .Property(x => x.nombre)      // ACCESO A LA PROPIEDAD
               .IsRequired()                 // CAMPO OBLIGATORIO
               .HasColumnOrder(10)           // ORDEN DE APARICIÓN DE COLUMNA
               .HasMaxLength(20);            // TAMAÑO 

            modelBuilder.Entity<Profesor>()
               .Property(x => x.nombre)
               .HasColumnName("Apellido");   // CAMBIA NOMBRE DE COLUMNA

            modelBuilder.Entity<Alumno>()
                .Property(x => x.promedio)
                .HasColumnName("Nota")
                .HasColumnOrder(1);

            /*    CONFIGURAR EL PROMEDIO DEL ALUMNO:
                  COMO NO OBLIGATORIO
                  CAMBIAR EL NOMBRE DE COLUMNA A NOTA
                  PONERLO EN PRIMER LUGAR

                  CONFIGURAR EL TITULO DEL CURSO:
                  UN TAMAÑO MÁXIMO DE 50 CARACTERES
                  QUE SEA OBLIGATORIO

                  CONFIGURAR FECHA DE INICIO DE CURSO:
                  CAMBIAR A TIPO DATETIME2  HasColumnType
            */
            modelBuilder.Entity<Curso>()
                .HasRequired(x => x.Profesor)
                .WithMany(x => x.Cursos)
                .HasForeignKey(x => x.profesor_FK);

            modelBuilder.Entity<Alumno>()
                .HasMany(x => x.Cursos)
                .WithMany(x => x.Alumnos)
                .Map(x =>
                {
                    x.MapLeftKey("alumno_PK");
                    x.MapRightKey("Curso_PK");
                    x.ToTable("Alumnos en Curso");
                });
            //relaciones de 0...1 a 1
            modelBuilder.Entity<Alumno>()
                .HasOptional(x => x.Telefono)
                .WithRequired(x => x.Alumno);
            modelBuilder.Entity<Telefono>()
                .HasRequired(x => x.Alumno)
                .WithOptional(x => x.Telefono);

            //relaciones de 1 a 1
            modelBuilder.Entity<Alumno>()
                .HasRequired(x => x.Direccion)
                .WithRequiredDependent(x => x.Alumno);

            modelBuilder.Entity<Direccion>()
                .HasRequired(x => x.Alumno)
                .WithRequiredPrincipal(x => x.Direccion);

            modelBuilder.Entity<Telefono>()
                .HasRequired(x => x.Profesor)
                .WithMany(x => x.Telefonos)
                .HasForeignKey(x => x.profesor_FK);

            modelBuilder.Entity<Profesor>()
                .HasOptional(x => x.Direccion)
                .WithRequired(x => x.Profesor);


            base.OnModelCreating(modelBuilder);
        }

    }
}
