using System;
using System.Collections.Generic;
using System.Text;

namespace HerenciaGatos
{
    class Felino
    {
        protected int patas;
        protected bool bigotes;
        protected string genero;

        public int Patas { get => patas; set => patas = value; }
        public bool Bigotes { get => bigotes; set => bigotes = value; }
        public string Genero { get => genero; set => genero = value; }
        public Felino()
        {

        }

        public Felino(int patas, bool bigotes, string genero)
        {
            this.patas = patas;
            this.bigotes = bigotes;
            this.genero = genero;
        }

        public void Arañar()
        {
            Console.WriteLine("Zarpazo");
        }
    }
}
