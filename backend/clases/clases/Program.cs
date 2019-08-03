using System;

namespace clases
{
    class Program
    {
        static void Main(string[] args)
        {
            //instanciar la clase, crear un objeto
            int[] x = new int[10];
            Auto miAut = new Auto();

            Auto miAuto = new Auto("Toyota", "cd2", 2000);
            //miAuto.marca = "VolksWagen";
            //miAuto.modelo = "Golf GTi";
            //miAuto.año = 2020;

            Console.WriteLine($"Este es mi {miAuto.modelo} del año {miAuto.año}");
            miAuto.Arrancar();
            miAuto.Atropellar("Jorge");
            miAuto.Atropellar("Jorge", "Mario");

        }
    }
}
