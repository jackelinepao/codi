using System;

namespace funciones
{
    class Program
    {
        static void Main(string[] args)
        {
            mayor(5, 8);
            int x = 10, y = 3;
            Console.WriteLine($"el mayor es {mayort(x,y)}");
        }
        static void mayor(int num1, int num2)
        {
            if (num1 > num2)
            {
                Console.WriteLine($"el mayor es {num1}");
            }else
            {
                Console.WriteLine($"el mayor es {num2}");
            }
            int[,] matriz =
            {
                {3, 6, 2, 1, 6, 1},
                {6, 3, 8, 3, 2, 10},
                {2, 3, 8, 4, 2, 5},
                {9, 2, 4, 7, 3, 9},
                {1, 3, 4, 2, 5, 10}
            };
            for(int fila = 0; fila < matriz.Length; fila++)
            {
                //    for(int columna = 0; columna < matriz.GetLength(fila) ; columna++)
                //    {

                //    }
                for (int columna = 0; columna < matriz.GetLength(fila); columna++)
                {
                    for(int filal)
                }
            }
            //}
        }
        static int mayort(int num1, int num2)
        {
            if (num1 > num2)
            {
                //Console.WriteLine($"el mayor es {num1}");
                return num1;
            }
            else
            {
                //Console.WriteLine($"el mayor es {num2}");
                return num2;
            }
        }
    
    }
}
