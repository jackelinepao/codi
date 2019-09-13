using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace emptyFramework
{
    class Program
    {
        static void Main(string[] args)
        {
            //USIN CREA UN BLOQUE QUE AL TERMINAR ELIMINA DE LA MEMORIA TODO LO QUE HABIA ENTONCES
            using (FACTURAEntities context = new FACTURAEntities())
            {
                //contex controla todas las entidades de bd
                var clientes = context.Customers.ToList();
                //el metodo tolist() hace una consulta a la bd
                foreach (var item in clientes)
                {
                    Console.WriteLine(item.Name);
                }
                
            }
        }
    }
}
