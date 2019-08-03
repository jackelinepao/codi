using System;
using System.Collections.Generic;
using System.Text;

namespace HerenciaGatos
{
    class Gato : Felino
    {
        string raza;
        int vidas;

        public override string ToString()
        {
            return $"Patas: {patas}\nBigotes: {bigotes}\nGenero: {genero}\nRaza: {raza}\nVidas: {vidas}";
        }
        public int Vidas { get => vidas; set => vidas = value; }

        public Gato():base(4, true, "Hembra")
        {
            raza = "atigrado";
            vidas = 7;
        }
        public Gato(int patas, bool bigotes, string genero, string raza, int vidas) : base(patas, bigotes, genero)
        {
            this.vidas = vidas;
            this.raza = raza;
        }
        public void Maullar()
        {
            Console.WriteLine("Miau miau");
        }
        public void Arañar()
        {
            Console.WriteLine("Arañazo de gato");
        }
    }
}
