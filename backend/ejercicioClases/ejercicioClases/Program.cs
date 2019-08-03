using System;

namespace ejercicioClases
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine(Math.Pow(2,2));
            //Console.WriteLine("1 => ingresar, 2=> retirar");
            //int opcion = int.Parse(Console.ReadLine());
            //Cuenta Micuenta = new Cuenta("78773247273", 90);
            //switch (opcion)
            //{
            //    case 1:
            //        Console.WriteLine("Ingrese el monto a depositar");
            //        double agregar = double.Parse(Console.ReadLine());
            //        Console.WriteLine(Micuenta.Cantidad);
            //        Console.WriteLine(Micuenta.Ingresar(agregar));
            //        break;
            //    case 2:
            //        Console.WriteLine("Ingrese el monto a retirar");
            //        double retirar = double.Parse(Console.ReadLine());
            //        Console.WriteLine(Micuenta.Cantidad);
            //        Console.WriteLine(Micuenta.Retirar(retirar));
            //        break;
            //}
            Persona Persona1 = new Persona("Maria", 12, 'F', 40, 1.50);
            Persona1.ValidarEdad();
            Persona1.CalcularPesoIdeal();
            Persona1.ValidarSexo();
            Persona1.MostrarInformacion();
            Persona Persona2 = new Persona("Mario", 12, 'F', 40, 1.50);
            Persona2.GenerarDni();
            Persona2.MostrarInformacion();
            Random random = new Random();
            random.Next();
            Console.WriteLine();
            Console.WriteLine(random.Next(63, 99));
            while (true)
            {
                int aleatorio = random.Next(99);
                if (aleatorio >= 64 && aleatorio <= 98)
                {
                    Console.WriteLine(aleatorio);
                    Console.ReadKey();
                }
                int aleatorio_1 = random.Next(35) + 64;
            }
        }
    }
}
