using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace codeFirst.Modelos
{
    [Table("MisProfesores", Schema = "Administracion")]
    class Profesor
    {
        public int id { get; set; }
        [Required]
        [MaxLength(50)]
        public string nombre { get; set; }
        [MaxLength(50)]
        [Timestamp]
        public byte[] version { get; set; }
        public string facultad{ get; set; }

        public ICollection<Curso> Cursos { get; set; }
    }
}
