using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace colegio_6.modelos
{
    class Curso
    {
        public int profesor_FK { get; set; }

        public int curso_PK { get; set; }
        public string titulo { get; set; }
        public DateTime fechaDeInicio { get; set; }

        public ICollection<Alumno> Alumnos { get; set; }
        public Profesor Profesor { get; set; }

    }
}
