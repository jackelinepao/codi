using System;

namespace matriz
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] matrizUno = {
                {1, 2, 3, 4},
                {2, 4, 3, 2},
                {2, 1, 3, 8},
                {5, 6, 2, 4}
            };
            ImprimirMatriz(matrizUno);
            int[,] matrizDos = {
                {4, 1, 3, 4},
                {5, 6, 3, 2},
                {7, 8, 2, 8},
                {1, 3, 4, 4}
            };
            ImprimirMatriz(matrizDos);

            //int[,] resultado = new int[matrizUno.GetLength(0), matrizDos.GetLength(1)];
            //for (int fila = 0; fila < matrizUno.GetLength(0); fila++)
            //{
            //    for (int col = 0; col < matrizDos.GetLength(1); col++)
            //    {
            //        resultado[fila, col] = matrizUno[fila, col] + matrizDos[fila, col];
            //    }
            //}
            //ImprimirMatriz(resultado);
            //sumarMatriz(matrizUno, matrizDos);
            int[,] mr = sumarMatriz(matrizUno, matrizDos);
            ImprimirMatriz(mr);
            //ImprimirMatriz(sumarMatriz(matrizUno, matrizDos));
            
            int num = int.Parse(Console.ReadLine());
            ImprimirMatriz(matrizIdentidad(num));
            ImprimirMatriz(matrizmul(num, matrizDos));
        }
        static void ImprimirMatriz(int[,] matriz)
        {
            for (int fila = 0; fila < matriz.GetLength(0); fila++)
            {
                for (int col = 0; col < matriz.GetLength(1); col++)
                {
                    Console.Write(matriz[fila, col] + "  ");
                }
                Console.WriteLine();
            }
        }
        static int[,] sumarMatriz(int[,] matriz1, int[,] matriz2)
        {
            int[,] resultado = new int[matriz1.GetLength(0), matriz2.GetLength(1)];
            for (int fila = 0; fila < matriz1.GetLength(0); fila++)
            {
                for (int col = 0; col < matriz1.GetLength(1); col++)
                {
                    resultado[fila, col] = matriz1[fila, col] + matriz2[fila, col];
                }
            }
            return resultado;
        }
        static int[,] matrizIdentidad(int numero)
        {
            int[,] midentidad = new int[numero, numero];
            for (int fila = 0; fila < midentidad.GetLength(0); fila++)
            {
                for (int col = 0; col < midentidad.GetLength(1); col++)
                {
                    if(fila == col)
                    {
                        midentidad[fila, col] = 1;
                    }
                    else
                    {
                        midentidad[fila, col] = 0;
                    }
                }
                
            }
            return midentidad;
        }
        static int[,] matrizmul(int number, int[,] mtriz)
        {
            int[,] mir = new int[mtriz.GetLength(0), mtriz.GetLength(1)];
            for (int fila = 0; fila < mtriz.GetLength(0); fila++)
            {
                for (int col = 0; col < mtriz.GetLength(1); col++)
                {
                    mir[fila, col] = mtriz[fila, col] * number;
                }

            }
            return mir;
        }
        //static int[,] multiplicarMatriz(int , int[,] mtriz)
        //{
        //    int[,] mir = new int[mtriz.GetLength(0), mtriz.GetLength(1)];
        //    for (int fila = 0; fila < mtriz.GetLength(0); fila++)
        //    {
        //        for (int col = 0; col < mtriz.GetLength(1); col++)
        //        {
        //            mir[fila, col] = mtriz[fila, col] * number;
        //        }

        //    }
        //    return mir;
        //}
    }
}
