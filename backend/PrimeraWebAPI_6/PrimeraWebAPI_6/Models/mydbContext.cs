using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace PrimeraWebAPI_6.Models
{
    public partial class mydbContext : DbContext
    {
        public mydbContext()
        {
        }

        public mydbContext(DbContextOptions<mydbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TAlquiler> TAlquiler { get; set; }
        public virtual DbSet<TColor> TColor { get; set; }
        public virtual DbSet<TDepartamento> TDepartamento { get; set; }
        public virtual DbSet<TDistrito> TDistrito { get; set; }
        public virtual DbSet<TDueniovehiculo> TDueniovehiculo { get; set; }
        public virtual DbSet<TImagenvehiculo> TImagenvehiculo { get; set; }
        public virtual DbSet<TMarca> TMarca { get; set; }
        public virtual DbSet<TModelo> TModelo { get; set; }
        public virtual DbSet<TPersona> TPersona { get; set; }
        public virtual DbSet<TProvincia> TProvincia { get; set; }
        public virtual DbSet<TTipovehiculo> TTipovehiculo { get; set; }
        public virtual DbSet<TUsuario> TUsuario { get; set; }
        public virtual DbSet<TValoracion> TValoracion { get; set; }
        public virtual DbSet<TVehiculo> TVehiculo { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuario { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySQL("server=localhost; database=mydb; uid=root; password=root;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<TAlquiler>(entity =>
            {
                entity.HasKey(e => e.AlquiId);

                entity.ToTable("t_alquiler", "mydb");

                entity.HasIndex(e => e.UsuId)
                    .HasName("fk_Alquiler_Usuario1_idx");

                entity.HasIndex(e => e.VeId)
                    .HasName("fk_t_alquiler_t_vehiculo1_idx");

                entity.Property(e => e.AlquiId)
                    .HasColumnName("alqui_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.AlquiCost)
                    .HasColumnName("alqui_cost")
                    .HasColumnType("decimal(10,2)");

                entity.Property(e => e.AlquiEst)
                    .IsRequired()
                    .HasColumnName("alqui_est")
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.AlquiFech)
                    .HasColumnName("alqui_fech")
                    .HasColumnType("date");

                entity.Property(e => e.AlquiFechfin)
                    .HasColumnName("alqui_fechfin")
                    .HasColumnType("date");

                entity.Property(e => e.AlquiFechin)
                    .HasColumnName("alqui_fechin")
                    .HasColumnType("date");

                entity.Property(e => e.UsuId)
                    .HasColumnName("usu_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.VeId)
                    .HasColumnName("ve_id")
                    .HasColumnType("int(11)");

                entity.HasOne(d => d.Usu)
                    .WithMany(p => p.TAlquiler)
                    .HasForeignKey(d => d.UsuId)
                    .HasConstraintName("fk_Alquiler_Usuario1");

                entity.HasOne(d => d.Ve)
                    .WithMany(p => p.TAlquiler)
                    .HasForeignKey(d => d.VeId)
                    .HasConstraintName("fk_t_alquiler_t_vehiculo1");
            });

            modelBuilder.Entity<TColor>(entity =>
            {
                entity.HasKey(e => e.ColorId);

                entity.ToTable("t_color", "mydb");

                entity.Property(e => e.ColorId)
                    .HasColumnName("color_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ColorNom)
                    .HasColumnName("color_nom")
                    .HasMaxLength(45)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TDepartamento>(entity =>
            {
                entity.HasKey(e => e.DptoId);

                entity.ToTable("t_departamento", "mydb");

                entity.Property(e => e.DptoId)
                    .HasColumnName("dpto_id")
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever();

                entity.Property(e => e.DptoNom)
                    .HasColumnName("dpto_nom")
                    .HasMaxLength(45)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TDistrito>(entity =>
            {
                entity.HasKey(e => e.DistId);

                entity.ToTable("t_distrito", "mydb");

                entity.HasIndex(e => e.ProvId)
                    .HasName("fk_t_distrito_t_provincia1_idx");

                entity.Property(e => e.DistId)
                    .HasColumnName("dist_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.DistNom)
                    .HasColumnName("dist_nom")
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.ProvId)
                    .HasColumnName("prov_id")
                    .HasColumnType("int(11)");

                entity.HasOne(d => d.Prov)
                    .WithMany(p => p.TDistrito)
                    .HasForeignKey(d => d.ProvId)
                    .HasConstraintName("fk_t_distrito_t_provincia1");
            });

            modelBuilder.Entity<TDueniovehiculo>(entity =>
            {
                entity.HasKey(e => e.DveId);

                entity.ToTable("t_dueniovehiculo", "mydb");

                entity.HasIndex(e => e.UsuId)
                    .HasName("fk_t_dueniovehiculo_t_usuario1_idx");

                entity.HasIndex(e => e.VeId)
                    .HasName("fk_t_dueniovehiculo_t_vehiculo1_idx");

                entity.Property(e => e.DveId)
                    .HasColumnName("dve_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.UsuId)
                    .HasColumnName("usu_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.VeId)
                    .HasColumnName("ve_id")
                    .HasColumnType("int(11)");

                entity.HasOne(d => d.Usu)
                    .WithMany(p => p.TDueniovehiculo)
                    .HasForeignKey(d => d.UsuId)
                    .HasConstraintName("fk_t_dueniovehiculo_t_usuario1");

                entity.HasOne(d => d.Ve)
                    .WithMany(p => p.TDueniovehiculo)
                    .HasForeignKey(d => d.VeId)
                    .HasConstraintName("fk_t_dueniovehiculo_t_vehiculo1");
            });

            modelBuilder.Entity<TImagenvehiculo>(entity =>
            {
                entity.HasKey(e => e.ImaId);

                entity.ToTable("t_imagenvehiculo", "mydb");

                entity.HasIndex(e => e.VeId)
                    .HasName("fk_t_imagenvehiculo_t_vehiculo1_idx");

                entity.Property(e => e.ImaId)
                    .HasColumnName("ima_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ImaUrl)
                    .HasColumnName("ima_url")
                    .IsUnicode(false);

                entity.Property(e => e.VeId)
                    .HasColumnName("ve_id")
                    .HasColumnType("int(11)");

                entity.HasOne(d => d.Ve)
                    .WithMany(p => p.TImagenvehiculo)
                    .HasForeignKey(d => d.VeId)
                    .HasConstraintName("fk_t_imagenvehiculo_t_vehiculo1");
            });

            modelBuilder.Entity<TMarca>(entity =>
            {
                entity.HasKey(e => e.MarcaId);

                entity.ToTable("t_marca", "mydb");

                entity.Property(e => e.MarcaId)
                    .HasColumnName("marca_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.MarcaNom)
                    .HasColumnName("marca_nom")
                    .HasMaxLength(45)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TModelo>(entity =>
            {
                entity.HasKey(e => e.ModId);

                entity.ToTable("t_modelo", "mydb");

                entity.HasIndex(e => e.MarcaId)
                    .HasName("fk_t_modelo_t_marca1_idx");

                entity.Property(e => e.ModId)
                    .HasColumnName("mod_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.MarcaId)
                    .HasColumnName("marca_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ModNom)
                    .HasColumnName("mod_nom")
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.HasOne(d => d.Marca)
                    .WithMany(p => p.TModelo)
                    .HasForeignKey(d => d.MarcaId)
                    .HasConstraintName("fk_t_modelo_t_marca1");
            });

            modelBuilder.Entity<TPersona>(entity =>
            {
                entity.HasKey(e => e.PerId);

                entity.ToTable("t_persona", "mydb");

                entity.Property(e => e.PerId)
                    .HasColumnName("per_id")
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever();

                entity.Property(e => e.PerApe)
                    .IsRequired()
                    .HasColumnName("per_ape")
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.PerDir)
                    .IsRequired()
                    .HasColumnName("per_dir")
                    .IsUnicode(false);

                entity.Property(e => e.PerNom)
                    .IsRequired()
                    .HasColumnName("per_nom")
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.PerTel)
                    .IsRequired()
                    .HasColumnName("per_tel")
                    .HasMaxLength(45)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TProvincia>(entity =>
            {
                entity.HasKey(e => e.ProvId);

                entity.ToTable("t_provincia", "mydb");

                entity.HasIndex(e => e.DptoId)
                    .HasName("fk_t_provincia_t_departamento1_idx");

                entity.Property(e => e.ProvId)
                    .HasColumnName("prov_id")
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever();

                entity.Property(e => e.DptoId)
                    .HasColumnName("dpto_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ProvNom)
                    .HasColumnName("prov_nom")
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.HasOne(d => d.Dpto)
                    .WithMany(p => p.TProvincia)
                    .HasForeignKey(d => d.DptoId)
                    .HasConstraintName("fk_t_provincia_t_departamento1");
            });

            modelBuilder.Entity<TTipovehiculo>(entity =>
            {
                entity.HasKey(e => e.TveId);

                entity.ToTable("t_tipovehiculo", "mydb");

                entity.Property(e => e.TveId)
                    .HasColumnName("tve_id")
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever();

                entity.Property(e => e.TveNom)
                    .IsRequired()
                    .HasColumnName("tve_nom")
                    .HasMaxLength(45)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TUsuario>(entity =>
            {
                entity.HasKey(e => e.UsuId);

                entity.ToTable("t_usuario", "mydb");

                entity.HasIndex(e => e.PerId)
                    .HasName("fk_t_usuario_t_persona1_idx");

                entity.HasIndex(e => e.TusuId)
                    .HasName("fk_t_usuario_Tipo_usuario1_idx");

                entity.Property(e => e.UsuId)
                    .HasColumnName("usu_id")
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever();

                entity.Property(e => e.PerId)
                    .HasColumnName("per_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.TusuId)
                    .HasColumnName("tusu_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.UsuEmail)
                    .IsRequired()
                    .HasColumnName("usu_email")
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.UsuFechreg)
                    .HasColumnName("usu_fechreg")
                    .HasColumnType("date");

                entity.Property(e => e.UsuFechses)
                    .HasColumnName("usu_fechses")
                    .HasColumnType("date");

                entity.Property(e => e.UsuHash)
                    .IsRequired()
                    .HasColumnName("usu_hash")
                    .IsUnicode(false);

                entity.Property(e => e.UsuImgurl)
                    .HasColumnName("usu_imgurl")
                    .IsUnicode(false);

                entity.Property(e => e.UsuSalt)
                    .IsRequired()
                    .HasColumnName("usu_salt")
                    .IsUnicode(false);

                entity.HasOne(d => d.Per)
                    .WithMany(p => p.TUsuario)
                    .HasForeignKey(d => d.PerId)
                    .HasConstraintName("fk_t_usuario_t_persona1");

                entity.HasOne(d => d.Tusu)
                    .WithMany(p => p.TUsuario)
                    .HasForeignKey(d => d.TusuId)
                    .HasConstraintName("fk_t_usuario_Tipo_usuario1");
            });

            modelBuilder.Entity<TValoracion>(entity =>
            {
                entity.HasKey(e => e.ValoId);

                entity.ToTable("t_valoracion", "mydb");

                entity.HasIndex(e => e.AlquiId)
                    .HasName("fk_t_valoracion_t_alquiler1_idx");

                entity.Property(e => e.ValoId)
                    .HasColumnName("valo_id")
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever();

                entity.Property(e => e.AlquiId)
                    .HasColumnName("alqui_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ValoComent)
                    .HasColumnName("valo_coment")
                    .IsUnicode(false);

                entity.Property(e => e.ValoPunt)
                    .HasColumnName("valo_punt")
                    .HasColumnType("int(11)");

                entity.HasOne(d => d.Alqui)
                    .WithMany(p => p.TValoracion)
                    .HasForeignKey(d => d.AlquiId)
                    .HasConstraintName("fk_t_valoracion_t_alquiler1");
            });

            modelBuilder.Entity<TVehiculo>(entity =>
            {
                entity.HasKey(e => e.VeId);

                entity.ToTable("t_vehiculo", "mydb");

                entity.HasIndex(e => e.ColorId)
                    .HasName("fk_t_vehiculo_t_color1_idx");

                entity.HasIndex(e => e.DistId)
                    .HasName("fk_t_vehiculo_t_distrito1_idx");

                entity.HasIndex(e => e.ModId)
                    .HasName("fk_t_vehiculo_t_modelo1_idx");

                entity.HasIndex(e => e.TveId)
                    .HasName("fk_t_vehiculo_t_tipovehiculo1_idx");

                entity.Property(e => e.VeId)
                    .HasColumnName("ve_id")
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever();

                entity.Property(e => e.ColorId)
                    .HasColumnName("color_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.DistId)
                    .HasColumnName("dist_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ModId)
                    .HasColumnName("mod_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.TveId)
                    .HasColumnName("tve_id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.VeAnio)
                    .HasColumnName("ve_anio")
                    .HasColumnType("int(11)");

                entity.Property(e => e.VeFechrt)
                    .HasColumnName("ve_fechrt")
                    .HasColumnType("date");

                entity.Property(e => e.VeFechvs)
                    .HasColumnName("ve_fechvs")
                    .HasColumnType("date");

                entity.Property(e => e.VeNroa)
                    .HasColumnName("ve_nroa")
                    .HasColumnType("int(11)");

                entity.Property(e => e.VeNrop)
                    .HasColumnName("ve_nrop")
                    .HasColumnType("int(11)");

                entity.Property(e => e.VePlaca)
                    .HasColumnName("ve_placa")
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.VePoliza)
                    .IsRequired()
                    .HasColumnName("ve_poliza")
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.VePrec)
                    .HasColumnName("ve_prec")
                    .HasColumnType("decimal(10,2)");

                entity.HasOne(d => d.Color)
                    .WithMany(p => p.TVehiculo)
                    .HasForeignKey(d => d.ColorId)
                    .HasConstraintName("fk_t_vehiculo_t_color1");

                entity.HasOne(d => d.Dist)
                    .WithMany(p => p.TVehiculo)
                    .HasForeignKey(d => d.DistId)
                    .HasConstraintName("fk_t_vehiculo_t_distrito1");

                entity.HasOne(d => d.Mod)
                    .WithMany(p => p.TVehiculo)
                    .HasForeignKey(d => d.ModId)
                    .HasConstraintName("fk_t_vehiculo_t_modelo1");

                entity.HasOne(d => d.Tve)
                    .WithMany(p => p.TVehiculo)
                    .HasForeignKey(d => d.TveId)
                    .HasConstraintName("fk_t_vehiculo_t_tipovehiculo1");
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.TusuId);

                entity.ToTable("tipo_usuario", "mydb");

                entity.Property(e => e.TusuId)
                    .HasColumnName("tusu_id")
                    .HasColumnType("int(11)")
                    .ValueGeneratedNever();

                entity.Property(e => e.TusuDesc)
                    .IsRequired()
                    .HasColumnName("tusu_desc")
                    .HasMaxLength(45)
                    .IsUnicode(false);
            });
        }
    }
}
