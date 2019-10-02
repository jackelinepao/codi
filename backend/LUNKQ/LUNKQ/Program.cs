using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LUNKQ
{
    class Program
    {
        static void Main(string[] args)
        {
            using (BikeStoresEntities context = new BikeStoresEntities())
            {
                foreach (var item in context.categories.ToList())
                {
                    Console.WriteLine(item.category_name);
                }
                List<int> miLista = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8 };
                var pares = miLista.FindAll(x=>x % 2 == 0);
                foreach (var item in pares)
                {
                    Console.WriteLine(item);
                }
                var query = from cliente in context.customers.ToList()
                            where cliente.state == "NY"
                            select cliente;
                foreach (var item in query)
                {
                    Console.WriteLine(item.first_name + " " + item.last_name);
                }
            }
        }
    }
}
