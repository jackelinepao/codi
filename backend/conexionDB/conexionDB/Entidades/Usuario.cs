using System;
using System.Collections.Generic;
using System.Text;

namespace conexionDB.Entidades
{
    class Usuario
    {
        String nombre;
        string clave;

        public string Nombre { get => nombre; set => nombre = value; }
        public string Clave { get => clave; set => clave = value; }
    }
}
