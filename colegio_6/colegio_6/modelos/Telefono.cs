using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace colegio_6.modelos
{
    class Telefono
    {
        public int profesor_FK { get; set; }
        public int id { get; set; }
        public string codCiudad { get; set; }
        public string numero { get; set; }
        public Alumno Alumno { get; set; }
        public Profesor Profesor { get; set; }
    }
}
