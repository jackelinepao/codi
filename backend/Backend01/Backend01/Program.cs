using System;//conjunto de herramientas f5->depurar, ctrl + f5 +(fn) ejecutar, salo de line\n, tabulacion\t

namespace Backend01
{
    class Program
    {
        static void Main(string[] args)
        {
            int num;
            num = int.Parse(Console.ReadLine());
            if(num / 100 ==100)
            {
                Console.WriteLine("tres cifras");
            }
        }
    }
}
