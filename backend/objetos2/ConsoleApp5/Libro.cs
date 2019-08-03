using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp5
{
    //privado _
    class Libro
    {
        string _titulo;
        double _precio;
        Autor autor;

        public Libro(string titulo, double precio)
        {
            _titulo = titulo;
            _precio = precio;
        }

        public Libro(string titulo, double precio, Autor autor)
        {
            _titulo = titulo;
            _precio = precio;
            this.autor = autor;
        }

        public override string ToString()
        {
            return $"Titulo Libro: {_titulo}\nPrecio: s/. {_precio}\nAutor:\n{autor}";
        }

        public string Titulo { get => _titulo; set => _titulo = value; }
        public double Precio { get => _precio; set => _precio = value; }
        internal Autor Autor { get => autor; set => autor = value; }
    }
}
