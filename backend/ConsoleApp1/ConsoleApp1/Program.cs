using System;
// 100 999
//-100 -999
namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ingres un númer");
            int numero = int.Parse(Console.ReadLine());
            if((numero > 99 && numero < 1000) || (numero < -99 && numero > -1000))
            {
                Console.WriteLine("El número es de tres cifras");
            }
            else
            {
                Console.WriteLine("No es de tres cifras");
            }
        }
    }
}
