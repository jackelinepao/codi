using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            //int num = int.Parse(Console.ReadLine());
            //for(int i = 1; i <= num; i++)
            //{
            //    for(int j = 1;j <= i; j++)
            //    {
            //        Console.Write($"{j} ");
            //    }
            //    Console.WriteLine();
            //}
            int num1 = int.Parse(Console.ReadLine());
            int num2 = int.Parse(Console.ReadLine());
            int suma = 0;
            for(int i = num1+1; i < num2; i++)
            {
                suma += i;
            }
            Console.WriteLine(suma);

            int numero = int.Parse(Console.ReadLine());
            int cont = 0;
            for(int i = 100; i > 1; i--)
            {
                if(i % 2 != 0 && cont < numero)
                {
                    Console.WriteLine(i);
                    cont++;
                }
            }
            int[] arreglo = { 45, 3, 45, 2, 3, 3, 9, 10 };
            int sumar = 0;
            int media = 0;
            int mayor = 0;
            int[] nuevoa = new int[arreglo.Length];
            for(var i = 0; i < arreglo.Length; i++)
            {
                sumar += arreglo[i];
                if(arreglo[i] > mayor)
                {
                    mayor = arreglo[i];
                }
                nuevoa[i] = arreglo[i];
            }

            media = sumar / arreglo.Length;
            Console.WriteLine("suma"+ sumar);
            Console.WriteLine("media" + media);
            Console.WriteLine("mayor" + mayor);
            foreach(int elemnto in nuevoa)
            {
                Console.WriteLine(elemnto + ", ");
            }
            int number = int.Parse(Console.ReadLine());
            int x = 0;
            int y = 1;
            int z = 0;
            for (int i = 0; i < number; i++)
            {
                Console.Write(x + " ");
                z = x + y;
                x = y;
                y = z;
                
            }

        }
    }
}
