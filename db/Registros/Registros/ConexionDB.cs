using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Registros
{
    class ConexionDB
    {
        SqlConnection con;
        string cadenaConexion = "Data source = .\\SQLEXPRESS; Initial catalog = singin; Integrated security = true;";

        public ConexionDB()
        {
            con = new SqlConnection(cadenaConexion);
        }

        public void AbrirConexion()
        {
            try
            {
                con.Open();
                Console.WriteLine("Se abrio la conexion");
            }
            catch (Exception ex)
            {
                Console.WriteLine("No se pudo abrir la conexion");
            }
        }
        public void CerrarConexion()
        {
            try
            {
                con.Close();
                Console.WriteLine("Se cerro la conexion");
            }
            catch (Exception ex)
            {
                Console.WriteLine("No se pudo cerrar la conexion");
            }
        }
        public SqlConnection GetConexion()
        {
            return con;
        }
    }
}
