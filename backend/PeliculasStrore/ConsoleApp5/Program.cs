using System;

namespace ConsoleApp5
{
    class Program
    {
        static Pelicula[] AgregarPeliculas()
        {
            //Pelicula pelis = new Pelicula(1, "Spideman", 30, 2 , 5);
            Pelicula[] peliculas = new Pelicula[2];
            for (int i = 0; i < peliculas.Length; i++)
            {
                int id_peli = i;
                Console.WriteLine("Ingresar el titulo de pelicula");
                string titulo_peli = Console.ReadLine();
                Console.WriteLine("Ingresar el precio de pelicula");
                double precio_peli = double.Parse(Console.ReadLine());
                Console.WriteLine("Ingresar disponibilidad s-de la pelicula ");
                int dispo_peli = char.Parse(Console.ReadLine());
                Console.WriteLine("Ingresar la puntuacio.n de pelicula (1 - 10)");
                int punt_peli = int.Parse(Console.ReadLine());
                peliculas[i] = new Pelicula(id_peli, titulo_peli, precio_peli, dispo_peli, punt_peli);

                Console.WriteLine(peliculas[i]);
            }
            return peliculas;
        }
        static Pelicula[] VerificarPeliculasDisponibles(Pelicula[] pelis)
        {
            Pelicula[] pelis_Disponibilidad = new Pelicula[pelis.Length];
            for (int i = 0; i < pelis.Length; i++)
            {
                if (pelis[i].Disponibilidad > 0)
                {
                    pelis_Disponibilidad[i] = pelis[i];
                    Console.WriteLine(pelis_Disponibilidad[i]);
                }

            }
            return pelis_Disponibilidad;
        }
        static Pelicula[] VerificarPeliculaDisponible(Pelicula[] pelis)
        {
            string t_peli = Console.ReadLine();
            Pelicula[] pelis_Disponibilidad = new Pelicula[pelis.Length];
            for (int i = 0; i < pelis.Length; i++)
            {
                if (pelis[i].Disponibilidad > 0 && pelis[i].Titulo_pelicula == t_peli)
                {
                    pelis_Disponibilidad[i] = pelis[i];
                    Console.WriteLine(pelis_Disponibilidad[i]);
                }
                else
                {
                    Console.WriteLine("No hay peliculas");
                }

            }
            return pelis_Disponibilidad;
        }
        static void ComprarPelicula(Pelicula[] pelis)
        {
            VerificarPeliculaDisponible(pelis);
            Console.WriteLine("Ingresar Pelicula a comprar");
            string t_peli = Console.ReadLine();
            Console.WriteLine("Ingresar la canitidad de peliculas");
            int cant = int.Parse(Console.ReadLine());
            for (int i = 0; i < pelis.Length; i++)
            {
                if (pelis[i].Disponibilidad > 0 && pelis[i].Titulo_pelicula == t_peli)
                {
                    pelis[i].Disponibilidad -= cant;
                    double precio = pelis[i].Precio * cant;
                    Console.WriteLine($"Se vendio {cant} al precio total {precio}");
                }

            }
        }
        static void Main(string[] args)
        {
            //int opcion = 0;
            //do
            //{
            //    Console.WriteLine("*********Menú************");
            //    Console.WriteLine("1 Ver peliculas diponible");
            //    Console.WriteLine("2 Verificar disponibilidad");
            //    Console.WriteLine("3 Comprar pelicula");
            //    Console.WriteLine("4 Devolver pelicula");
            //    Console.WriteLine("5 Peliculas populares");
            //} while (opcion > 8);
            //AgregarPeliculas();
            Pelicula[] pelis = AgregarPeliculas();
            VerificarPeliculasDisponibles(pelis);
            VerificarPeliculaDisponible(pelis);
            ComprarPelicula(pelis);
        }
    }
}
