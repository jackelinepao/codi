using System;
using System.Collections.Generic;

namespace HerenciaGatos
{
    class Program
    {
        static void Main(string[] args)
        {
            Felino fel1 = new Felino();
            fel1.Arañar();
            Gato cat1 = new Gato();
            cat1.Arañar();
            cat1.Maullar();
            Console.WriteLine(cat1);
            //Listas genericas que contengan cualquier tipo de dato 
            int[] arregloDeEnteros = new int[10];
            arregloDeEnteros[0] = 1;

            List<int> listaDeEnteros = new List<int>();
            Console.WriteLine(listaDeEnteros.Count);
            listaDeEnteros.Add(5);
            Console.WriteLine(listaDeEnteros.Count);
        }
    }
}
