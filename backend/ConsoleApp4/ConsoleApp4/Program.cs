using System;

namespace ConsoleApp4
{
    class Program
    {
        static void Main(string[] args)
        {
            double nota1;
            double nota2;
            double nota3;
            double notaapro;
            Console.WriteLine("Ingresar primera nota");
            nota1 = double.Parse(Console.ReadLine());
            Console.WriteLine("Ingresar segunda nota");
            nota2 = double.Parse(Console.ReadLine());
            Console.WriteLine("Ingresar la nota para aprobar");
            notaapro = double.Parse(Console.ReadLine());

            nota3 = (notaapro * 3) - nota1 - nota2;
            if(nota3 < 20)
            {
                //Console.WriteLine(nota3);
                Console.WriteLine($"Necesitas {nota3} para aprobar");
            }
            else
            {
                Console.WriteLine("Ya no puedes aprobar");
            }
            
            

        }
    }
}
