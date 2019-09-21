using conexionDB.Entidades;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace conexionDB.Controladores
{
    class ControladorUsuario
    {
        ConexionBD con = new ConexionBD();
        SqlCommand cmd;
        public void InsertarUsuario(Usuario usuario)
        {
            cmd = new SqlCommand($"INSERT INTO usuarios (nombre, clave) VALUES ('{usuario.Nombre}', '{usuario.Clave}')", con.GetConexion());
            con.AbrirConexion();
            cmd.ExecuteNonQuery();
            con.CerrarConexion();
        }
        public void CambiarContraseña(Usuario usuario)
        {
            cmd = new SqlCommand
            ($"UPDATE USUARIOS SET CLAVE = '{usuario.Clave}' " +
            $"WHERE NOMBRE = '{usuario.Nombre}'", con.GetConexion());
            con.AbrirConexion();
            Int32 count = Int32
            con.CerrarConexion();
        }
    }
}
