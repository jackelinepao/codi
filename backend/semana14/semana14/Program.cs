using System;

namespace semana14
{
    class Program
    {
        static void Main(string[] args)
        {
            int a, b;
            a = int.Parse(Console.ReadLine());
            b = int.Parse(Console.ReadLine());
            int[] arreglo = { 1, 2, 3, 4, 5 };
            try //acciiones que intentamos hacer y puede dar una excepcion
            {
                Console.WriteLine(a / b);
                Console.WriteLine(arreglo[7]);
      
            }
            catch (DivideByZeroException ex)
            {
                Console.WriteLine("Desea enviar el mensaje al adiministrador 's'/'n'");
                char opc = char.Parse(Console.ReadLine());
                if(opc == 's' || opc == 'S')
                {
                    Console.WriteLine(ex.StackTrace);
                }
                else if(opc == 'n' || opc == 'N')
                {
                    Console.WriteLine("No se puede divir por 0");
                }
                //throw;
            }
            catch (IndexOutOfRangeException index)
            {
                Console.WriteLine("Indice no encontrado");
            }
        }
    }
}
