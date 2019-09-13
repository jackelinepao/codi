using Registros.Controladores;
using Registros.Entidades;
using System;

namespace Registros
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Registrar usuario");
            Console.WriteLine("Ingrese nombre de usuario");
            string name_user = Console.ReadLine();
            Console.WriteLine("Ingrese su correo");
            string correo_user = Console.ReadLine();
            Console.WriteLine("Ingrese su cotraseña");
            string contrasena_user = Console.ReadLine();
            Console.WriteLine("Ingrese su fecha de Nacimiento");
            DateTime name_fnac = Convert.ToDateTime(Console.ReadLine());
            Console.WriteLine("Ingrese el tipo de privilegio");
            int privilegio = int.Parse(Console.ReadLine());
            ControladorUsuario cUsuario = new ControladorUsuario();
            Usuario user = new Usuario() { Nombre = name_user, Contrasena =  };
            cUsuario.InsertarUsuario(usu);
            cUsuario.InsertarUsuario(new Usuario() { Nombre = "Yo", Clave = "666" });
        }
    }
}
