using System;
using System.Collections.Generic;
using System.Text;

namespace Herencia
{
    class Actor
    {
        //protected solo heredan sus hijos
        protected string nombre;
        protected string genero;
        protected string[] personajes;

        public Actor()
        {

        }
        public Actor(string nombre, string genero)
        {
            this.nombre = nombre;
            this.genero = genero;
        }

        public string Nombre { get => nombre; set => nombre = value;}
        public string Genero { get => genero; }
        public string[] Personajes { get => personajes; set => personajes = value; }
    }
}
