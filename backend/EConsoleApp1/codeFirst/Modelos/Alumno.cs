using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace codeFirst.Modelos
{
    [Table("MisAlumnos", Schema = "Administracion")]
    class Alumno
    {
        public Alumno()
        {
            Cursos = new List<Curso>();
        }
        [Key]
        public int id{ get; set; }
        [Required]
        [Column("Nombres y Apellidos", Order =1)]
        public string  nombre { get; set; }
        [Column("Nota", Order = 0)]
        public double ponderado { get; set; }
        [NotMapped]
        public int edad { get; set; }
        [ForeignKey("direccion")]
        public int MiCasa { get; set; }
        public Direccion direccion { get; set; }
        public ICollection<Curso> Cursos { get; set; }

    }
}
