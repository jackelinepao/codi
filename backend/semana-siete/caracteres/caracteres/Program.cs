using System;

namespace caracteres
{
    class Program
    {
        static double Telegrama(string mensaje)
        {
            char[] arrMensaje = mensaje.ToCharArray();
            double cl = 0.10;
            double cn = 0.15;
            double cs = 0.20;
            double total = 0;
            int letras = 0;
            int numeros = 0;
            int simbolos = 0;
            int espacio = 0;
            for (int i = 0; i < arrMensaje.Length; i++)
            {
                if (char.IsLetter(arrMensaje[i]))
                {
                    letras++;
                    //costo +=0.1
                }
                else if (char.IsDigit(arrMensaje[i]))
                {
                    numeros++;
                }
                else if (char.IsSymbol(arrMensaje[i]) || char.IsPunctuation(arrMensaje[i]))
                {
                    simbolos++;
                }
                else if (char.IsWhiteSpace(arrMensaje[i])){
                    espacio++;
                }
            }
            total = (letras * cl) + (numeros * cn) + (simbolos * cs) + (espacio * 0);
            return total;
        }
        static void Main(string[] args)
        {
            string nombre = "jackeline";
            char primeraLetra = 'j';
            char [] arregloNombre = nombre.ToCharArray();
            char.IsLetter(primeraLetra);
            char.IsDigit(primeraLetra);
            //string mensaje = Console.ReadLine();
            //Telegrama(mensaje);
            //Console.WriteLine(Telegrama(mensaje));
            char letra = 's';
            char letraMayuscula = char.ToLower(letra);
            char.ToLower('S');
            char.ToUpper('a');
            //string texto = Console.ReadLine();
            //char[] arregloLetras = texto.ToCharArray();
            //for (int i = 0; i < arregloLetras.Length; i++)
            //{
            //    if(i%2 == 0)
            //    {
            //        arregloLetras[i] = char.ToLower(arregloLetras[i]);
            //    }//a == @
            //    else
            //    {
            //        arregloLetras[i] = char.ToUpper(arregloLetras[i]);
            //    }
            //}
            //Console.Write(arregloLetras);
            string palabra = Console.ReadLine();
            char[] arrayPalabra = palabra.ToCharArray();
            bool a = false;
            bool e = false;
            bool i = false;
            bool o = false;
            bool u = false;
            foreach (var item in arrayPalabra)
            {
                if(item == 'a' || item == 'A')
                {
                    a = true;
                }
                else if (item == 'e' || item == 'E')
                {
                    e = true;
                }
                else if (item == 'i' || item == 'i')
                {
                    i = true;
                }
                else if (item == 'o' || item == 'O')
                {
                    o = true;
                }
                else if (item == 'u' || item == 'U')
                {
                    u = true;
                }

            }
            if (a&&e&&i&&o&&u)
            {
                Console.WriteLine("es panvocalica");
            }
            else
            {
                Console.WriteLine("no es panvocalica");
            }
        }
    }
}
