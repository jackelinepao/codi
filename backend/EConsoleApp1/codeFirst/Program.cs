using codeFirst.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace codeFirst
{
    //Enable-Migrations
    //add-migration MigracionInicial
    //update-database
    class Program
    {
        static void Main(string[] args)
        {
            using (ColegioContext context = new ColegioContext())
            {
                var alumnos = context.Alumnos.ToList();
                Direccion dir = new Direccion()
                {
                    numero = 101,
                    calle = "Manzanitos"
                };
                Alumno alumno = new Alumno()
                {
                    nombre = "paola",
                    ponderado = 20,
                    direccion = dir,
                };
                Curso curso = new Curso()
                {
                    titulo = "C#",
                    fechaDeInicio = Convert.ToDateTime("2019-06-06"),
                    profesor = new Profesor() { nombre = "Patrick" },
                    Alumnos = new List<Alumno>()
                };
                curso.Alumnos.Add(alumno);
                context.Cursos.Add(curso);
                context.Alumnos.Add(alumno);
                context.SaveChanges();
                foreach (var a in alumnos)
                {  
                    Console.WriteLine(a.nombre + " " + a.ponderado);
                }

            }
        }
    }
}
