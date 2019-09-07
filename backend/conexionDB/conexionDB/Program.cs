using conexionDB.Controladores;
using conexionDB.Entidades;
using System;

namespace conexionDB
{
    class Program
    {
        static void Main(string[] args)
        {
            ControladorUsuario cUsuario = new ControladorUsuario();
            Usuario usu = new Usuario() { Nombre = "Paola", Clave = "123" };
            cUsuario.InsertarUsuario(usu);
            cUsuario.InsertarUsuario(new Usuario() { Nombre = "Yo", Clave = "666" });
        }
    }
}
