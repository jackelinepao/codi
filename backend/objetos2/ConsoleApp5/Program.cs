using System;

namespace ConsoleApp5
{
    class Program
    {
        static void Main(string[] args)
        {
            Autor autor = new Autor("Mark Douglas", "mdouglas@gmail.com");
            Libro libro = new Libro("Trading en la zona", 90);
            Console.WriteLine(autor.ToString());
            Console.WriteLine(libro.ToString());
            libro.Autor = autor;
            Console.WriteLine(libro.ToString());
            Libro vaca = new Libro("La vaca", 40, new Autor("dew", "dddd"));
            Console.WriteLine(vaca.ToString());
            Console.WriteLine(vaca.Autor.Nombre);
        }
    }
}
