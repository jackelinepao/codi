using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace codeFirst.Modelos
{
    [Table("MisDreccione", Schema = "Administracion")]
    class Direccion
    {
        public int id { get; set; }
        public string calle { get; set; }
        public int numero { get; set; }
    }
}
