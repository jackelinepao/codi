using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
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
                //foreach (var categoria in context.categories.ToList())
                //{
                //    Console.WriteLine(categoria.category_name);
                //}

                //List<int> miLista = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8 };

                //var pares = miLista.FindAll(x => x % 2 == 0);


                //// SINTAXIS DE CONSULTAS (QUERY SYNTAX)

                //var query = from cliente in context.customers.ToList()
                //            where cliente.state == "NY"
                //            select cliente;
                //// select * from customers where state = 'NY'

                //Console.WriteLine("Clientes en Nueva York:");
                //foreach (var item in query)
                //{
                //    Console.WriteLine(item.first_name + " " + item.last_name);
                //}

                //string cadena = "Hola";
                //// var primeraLetra = cadena.StartsWith("H");
                //var primeraLetra = "Hola".StartsWith("H");

                //// CONSULTAR EN LA BASE DE DATOS TODO EL PERSONAL (STAFFS) 
                //// CUYO APELLIDO EMPIECE CON D.

                //var empiezanConD = from personal in context.staffs.ToList()
                //                   where personal.last_name.StartsWith("D")
                //                   select personal;

                //foreach (var item in empiezanConD)
                //{
                //    Console.WriteLine(item.last_name + " " + item.first_name);
                //}

                //// SINTAXIS DE MÉTODOS
                //var empleados = context.staffs.ToList();
                //var queryX = empleados
                //   .Where(x => x.last_name.StartsWith("D"));

                //// CONSULTAR TODOS LOS CLIENTES CUYO NOMBRE EMPIECE CON J Y
                //// SU CORREO SEA DEL DOMINIO @AOL.COM Y QUE SEA DE HOUSTON

                //var misClientes = from cliente in context.customers.ToList()
                //                  where cliente.first_name.StartsWith("J") &&
                //                  cliente.email.Contains("@aol.com") &&
                //                  cliente.city == "Longview"
                //                  select cliente;

                //// SQL: SELECT * FROM CUSTOMERS WHERE FIRST_NAME LIKE 'J%' and
                //// EMAIL LIKE '%@AOL.COM' AND CITY = 'LONGVIEW'

                //// PROYECCIÓN: ELECCIÓN DE LAS COLUMNAS QUE NECESITAMOS
                //// SELECT CITY FROM CUSTOMERS;
                //var ciudades = from c in context.customers.ToList()
                //               select new { Ciudad = c.city };

                //foreach (var ciudad in ciudades)
                //{
                //    Console.WriteLine(ciudad.Ciudad);
                //}

                //// MOSTRAR EL TELÉFONO Y LA TIENDA DEL PERSONAL (STAFFS)
                //var telefonoYTienda = from s in context.staffs.ToList()
                //                      select new
                //                      {
                //                          Telefono = s.phone,
                //                          Tienda = s.store_id
                //                      };

                //var telefonoYTiendaX = context.staffs
                //   .Select(x => new
                //   {
                //       Telefono = x.phone,
                //       Tienda = x.store_id
                //   });
                ////ordenamiento por primer nombre
                //var clientesordenados = from c in context.customers.ToList()
                //                        orderby c.first_name descending,
                //                        c.last_name ascending
                //                        select c;

                ////sql:select*from customers
                //var clienteOrdenadosX = context.customers
                //    .OrderByDescending(x => x.first_name)
                //    .ThenBy(x => x.last_name);

                ////Group by
                //var grupoPorEstado = from c in context.customers.ToList()
                //                     where c.last_name.StartsWith("J")
                //                     group c by c.state into grupo
                //                     select grupo;

                //Console.WriteLine("Grupos de Estados");
                //foreach (var grupos in grupoPorEstado)
                //{
                //    Console.WriteLine(grupos.Key);
                //    foreach (var cliente in grupos)
                //    {
                //        Console.WriteLine(cliente.last_name);
                //    }

                //}

                //var grupoPorEstadoX = context.customers.GroupBy(x => x.state);
                //var joinClienteOrden = from c in context.customers.ToList()
                //                       join o in context.orders.ToList()
                //                       on c.customer_id equals o.customer_id
                //                       select new
                //                       {
                //                           Cliente = c.first_name,
                //                           Orden = o.order_status,
                //                       };
                //var clienteX = context.orders.Find(1).order_items;

                //var clientesConOrdenesX = context.customers.Include(x => x.orders);
                //foreach (var cliente in clientesConOrdenesX)
                //{
                //    Console.WriteLine(cliente.first_name);
                //    foreach (var order in cliente.orders)
                //    {
                //        Console.WriteLine(order.order_status);
                //    }
                //}
                //////
                //var productoConCategoria = from p in context.products
                //                           .Include(x => x.categories)
                //                           select p;
                //var productoConCategoriaX = context.products
                //    .Include(x => x.categories);

                //foreach( var producto in productoConCategoria)
                //{
                //    Console.WriteLine(producto.product_name + "" + producto.categories.category_name);
                //}
                ///////
                var empleadoConJefe = from e in context.staffs
                                      .Include(x => x.<)
                                      select e;

                foreach ( var empleado in empleadoConJefe)
                {
                    if(empleado.staffs2 == null)
                        Console.WriteLine(empleado.first_name + ",Jefe Supremo " + empleado.staffs2.first_name);
                    else
                        Console.WriteLine(empleado.first_name + "Jefe: " + empleado.staffs2.first_name);
                }

                var marcasConSusProductos = context.brands
                    .Include(x => x.products);
                foreach (var marca in marcasConSusProductos)
                {
                    Console.WriteLine(marca.brand_name);
                    var productosDel2016 = marca.products.Where(x => x.model_year == 2016);
                    if (!productosDel2016.Any())
                        Console.WriteLine("No hay productos");
                    foreach (var item in productosDel2016)
                    {
                        Console.WriteLine(item.product_name);
                    }
                }
            }


        }
    }
}
