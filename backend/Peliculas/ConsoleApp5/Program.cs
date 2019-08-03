using System;

namespace ConsoleApp5
{
    class Program
    {
        static void Main(string[] args)
        {
            Telelvisor tev = new Telelvisor();
            tev.ComprobarConsumo();
            tev.ComprobarPulgadas();
            Console.WriteLine(tev);
        }
    }
}
