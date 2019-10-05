using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EJERCICIOS_LQ
{
    class Program
    {
        static void Main(string[] args)
        {
            using(BikeStoresEntities context = new BikeStoresEntities())
            {
                var ejercicio1 = from p in context.products.ToList()
                                 where p.model_year == 2016
                                 select new
                                 {
                                     Nombre = p.product_name,
                                     Modelo = p.model_year
                                 };
                var ejercicio1X = context.products
                    .Where(x => x.model_year == 2016)
                    .Select(x => new
                    {
                        Nombre = x.product_name,
                        Modelo = x.model_year
                    });
                foreach (var item in ejercicio1)
                {
                    Console.WriteLine(item.Nombre);
                };
                var productosCol = from p in context.products.ToList()
                                   select new
                                   {

                                   }

            }
        }
    }
}
