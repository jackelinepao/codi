using Registros.Entidades;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Registros.Controladores
{
    class ControladorUsuario
    {
        ConexionDB con = new ConexionDB();
        SqlCommand cmd;
        
        public void InsertarUsuario(Usuario user)
        {
            cmd = new SqlCommand($"INSERT INTO usuarios (nombre, correo, contrasena, fecha_nacimiento, privilegios) values('{user.Nombre}','{user.Correo}','{user.Contrasena}','{user.FechaNacimiento}',{user.Privilegios})", con.GetConexion());
            con.AbrirConexion();
            cmd.ExecuteNonQuery();
            con.CerrarConexion();
        }
        public void UpdateUsuario(Usuario user)
        {
            cmd = new SqlCommand($"UPDATE usuarios SET CORREO = '{user.Correo}', CONTRASENA ='{user.Contrasena}', FECHA_NACIMIENTO = '{user.FechaNacimiento}', PRIVIlEGIOS = {user.Privilegios}'", con.GetConexion());
            con.AbrirConexion();
            cmd.ExecuteNonQuery();
            con.CerrarConexion();
        }

        public void EliminarUsuario(Usuario user)
        {
            cmd = new SqlCommand($"DELETE FROM usuarios WHERE nombre = '{user.Nombre}'", con.GetConexion());
        }

        public void LeerUusario()
        {
            cmd = new SqlCommand($"SELECT nombre, clave FROM usuarios ORDEN BY nombre", con.GetConexion());

            SqlDataReader reader = cmd.ExecuteReader();

            while (reader.Read())
            {
                Console.WriteLine(reader[0] + "\t\t" + reader[1]);
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        }

    }
}
