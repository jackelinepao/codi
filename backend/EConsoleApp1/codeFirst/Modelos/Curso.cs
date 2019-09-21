using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace codeFirst.Modelos
{
    [Table("MisCursos", Schema = "Administracion")]
    class Curso
    {
        public int id{ get; set; }
        public string titulo { get; set; }
        public DateTime fechaDeInicio { get; set; }
        [ForeignKey("profesor")]
        public int Profesor { get; set; }
        public ICollection<Alumno> Alumnos { get; set; }
        public Profesor profesor{ get; set; }

    }
}
