using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp5
{
    class Autor
    {
        string _nombre;
        string _correo;

        public Autor(string nombre, string correo)
        {
            _nombre = nombre;
            _correo = correo;
        }
        public override string ToString()
        {
            return $"Nombre Autor: {_nombre}\nEmail: {_correo}";
        }

        public string Nombre { get => _nombre; set => _nombre = value; }
        public string Correo { get => _correo; set => _correo = value; }
    }
}
