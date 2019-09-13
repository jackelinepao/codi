using System;
using System.Collections.Generic;
using System.Text;

namespace Registros.Entidades
{
    class Usuario
    {
        string nombre;
        string correo;
        string contrasena;
        DateTime fechaNacimiento;
        int privilegios;

        public string Nombre { get => Nombre; set => Nombre = value; }
        public string Correo { get => correo; set => correo = value; }
        public string Contrasena { get => contrasena; set => contrasena = value; }
        public DateTime FechaNacimiento { get => fechaNacimiento; set => fechaNacimiento = value; }
        public int Privilegios { get => privilegios; set => privilegios = value; }
    }
}
