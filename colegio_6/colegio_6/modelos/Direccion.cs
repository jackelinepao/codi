using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace colegio_6.modelos
{
    class Direccion
    {
        public int id { get; set; }
        public string calle { get; set; }
        public int numero { get; set; }
        public Alumno Alumno { get; set; }

        public Profesor Profesor { get; set; }
    }
}
