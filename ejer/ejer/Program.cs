using System;

namespace ejer
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Ingrese un tamaño");
            //int tam = int.Parse(Console.ReadLine());
            int[] arr = new int[100];
            int cont1, cont2, cont3;
            for(int i = 0; i < arr.Length; i++)
            {
                //Console.WriteLine("Ingrese un numero");
                arr[i] = i + 1;
                
            }
            cont1 = 0;
            cont2 = 0;
            cont3 = 0;
            foreach(int elemento in arr)
            {
                //if (elemento % 5 == 0 || elemento % 7 == 0 || (elemento % 5 == 0 && elemento % 7 == 0))
                //{
                //    Console.WriteLine(elemento + " ");
                //}
                if (elemento % 5 == 0)
                {
                    cont1++;
                }
                if (elemento % 7 == 0)
                {
                    cont2++;
                }
                if (elemento %5 == 0 && elemento % 7 == 0)
                {
                    cont3++;
                }
            }
            Console.WriteLine($"multiplos de 5: {cont1}, multiplos de 7: {cont2}, multiplos de 5 y 7: {cont3}");
        }
    }
}
