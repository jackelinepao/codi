using System;

namespace ejerfor
{
    class Program
    {
        static void Main(string[] args)
        {
            for(int i = 1; i <= 12; i++)
            {
                Console.WriteLine($"{i} x 9 = {i * 9}");
            }
            int cont;
            cont = 0;
            for (int j = 1; j < 40; j++){
            if (j % 2 != 0)
               {
                Console.WriteLine(j);
                cont++;
                }
                };
            int num;
            num = int.Parse(Console.ReadLine());
            int suma;
            suma = 0;
            for(int f = 0; f < num; f++)
            {
                if(f % 3 == 0)
                {
                    Console.WriteLine(f);
                    suma = suma + f;
                }
            }
        }
    }
}
