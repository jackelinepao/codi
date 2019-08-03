using System;

namespace ejercicioswitch
{
    class Program
    {
        static void Main(string[] args)
        {
            int opcion;
            double monto;
            Console.WriteLine("1 Ripley");
            Console.WriteLine("2 Saga");
            Console.WriteLine("3 Bcp");
            opcion = int.Parse(Console.ReadLine());
            Console.WriteLine("Ingese el monto");
            monto = double.Parse(Console.ReadLine());
            switch (opcion)
            {
                case 1:
                    monto = monto - monto * 0.15;
                    Console.WriteLine($"Monto a pagar {monto}, con tarjeta Ripley");
                    break;
                case 2:
                    monto = monto - monto * 0.2;
                    Console.WriteLine($"Monto a pagar {monto}, con tarjeta Saga");
                    break;
                case 3:
                    monto = monto - monto * 0.1;
                    Console.WriteLine($"Monto a pagar {monto}, con tarjeta BCP");
                    break;
                default:
                    Console.WriteLine($"Monto a pagar {monto}");
                    break;

            }

        }
    }
}
