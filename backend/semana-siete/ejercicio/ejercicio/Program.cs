using System;

namespace ejercicio
{
    class Program
    {
        static void Imprimir(int[] arre)
        {
            for (int i = 0; i < arre.GetLength(0); i++)
            {
                Console.Write(arre[i] + " ");
            }
            Console.WriteLine();
        }
        static int[] Push(int n, int[] arr)
        {
            Imprimir(arr);
            int[] arregloNuevo = new int[arr.Length + 1];
            for (int i = 0; i < arr.Length; i++)
            {
                arregloNuevo[i] = arr[i];
            }
            arregloNuevo[arregloNuevo.Length - 1] = n;
            Imprimir(arregloNuevo);
            return arregloNuevo;
        }
        static int[] Pop(int[] arr)
        {
            if (arr.Length == 0)
            {
                Console.WriteLine("no hay elementos");
                return arr;
            }
            else
            {
                Imprimir(arr);
                int[] arregloRecortado = new int[arr.Length - 1];
                for (int i = 0; i < arr.Length - 1; i++)
                {
                    arregloRecortado[i] = arr[i];
                }
                Imprimir(arregloRecortado);
                return arregloRecortado;
            }
        }
        static void Ordenar(int[] arr)
        {
            if (arr[0] > arr[1])
            {
                Imprimir(arr);
                for (int i = 0; i < arr.Length; i++)
                {
                    for (int j = i; j < arr.Length; j++)
                    {
                        if (arr[i] > arr[j])
                        {
                            int temp;
                            temp = arr[i];
                            arr[i] = arr[j];
                            arr[j] = temp;
                        }
                    }
                    //Imprimir(arr);
                }
                Imprimir(arr);
            }
        }
        static bool Simetrico(int[] arr)
        {
            var simetrico = true;
            for(int i = 0, j = arr.Length - 1; i < arr.Length/2 && j >=0; i++, j--)
            {
                    if(arr[i] != arr[j])
                    {
                        simetrico = false;
                        break;
                    }
            }
            return simetrico;
        }
        static int[] Eliminar(int n, int[] arr)
        {
            if (n > arr.Length || n < 0)
            {
                Console.WriteLine("error");
                return arr;
            }
            if (arr.Length == 0)
            {
                Console.WriteLine("error");
                return arr;
            }
            else
            {
                Imprimir(arr);
                int[] arregloRecortado = new int[arr.Length - 1];
                for (int i = 0, contador = 0; i < arr.Length; i++)
                {
                    if (i != n)
                    {
                        arregloRecortado[contador] = arr[i];
                        contador++;
                    }
                }
                Imprimir(arregloRecortado);
                return arregloRecortado;
            }
        }
        static void Main(string[] args)
        {
            int[] arreglo = { 1, 3, 5, 9, 1, 5, 3, 1 };
            int opcion;

            do
            {
                Console.WriteLine("************Menú*******");
                Console.WriteLine("1 function push");
                Console.WriteLine("2 function pop");
                Console.WriteLine("3 ordenar arreglo");
                Console.WriteLine("4 asimetria");
                Console.WriteLine("5 Eliminar po posicion");
                opcion = int.Parse(Console.ReadLine());
                switch (opcion)
                {
                    case 1:
                        Console.WriteLine("ingrese un número para agregar al arreglo");
                        int n = int.Parse(Console.ReadLine());
                        arreglo = Push(n, arreglo);
                        break;
                    case 2:
                        arreglo = Pop(arreglo);
                        break;
                    case 3:
                        Ordenar(arreglo);
                        break;
                    case 4:
                        Simetrico(arreglo);
                        if (Simetrico(arreglo))
                        {
                            Console.WriteLine("Es simetrico");
                        }
                        else
                        {
                            Console.WriteLine("No es simetrico");
                        }
                        break;
                    case 5:
                        Console.WriteLine("ingrese el indice a eliminar el elemento del arreglo");
                        int num = int.Parse(Console.ReadLine());
                        arreglo = Eliminar(num, arreglo);
                        break;
                }
            } while (opcion != 6);
        }

    }
}