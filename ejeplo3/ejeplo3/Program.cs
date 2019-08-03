using System;

namespace ejeplo3
{
    class Program
    {
        static void Main(string[] args)
        {
            double num1;
            double num2;
            string operador;
            Console.WriteLine("Ingrese un número");
            num1 = double.Parse(Console.ReadLine());
            Console.WriteLine("Ingrese un operador +, -, /, *");
            operador = Console.ReadLine();
            Console.WriteLine("Ingrese un número");
            num2 = double.Parse(Console.ReadLine());
            double rpta;
            switch(operador){
                case "*":
                    rpta = num1 * num2;
                    Console.WriteLine(rpta);
                    break;
                case "-":
                    rpta = num1 - num2;
                    Console.WriteLine(rpta);
                    break;
                case "/":
                    
                    if (num2 != 0)
                    {
                        rpta = num1 / num2;
                        Console.WriteLine(rpta);
                    }
                    else
                    {

                        Console.WriteLine("no se pude dividir");
                    }
                    
                    break;
                default:
                    rpta = num1 + num2;
                    Console.WriteLine(rpta);
                    break;

            }
            
        }
    }
}
