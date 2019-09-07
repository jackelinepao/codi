﻿using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace conexionDB
{
    class ConexionBD
    {
        SqlConnection con;
        string cadenaConexion =
                "Data source = .\\SQLEXPRESS;" + //EL SERVIDOR DONDE ESTAN LOS DATOS
                "Initial catalog = BikeStores;" + //la base de datos
                "Integrated security = true;";
        public ConexionBD()
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
            catch (Exception)
            {
                Console.WriteLine("No se pudo cerrar la conexión");
            }
        }
        public SqlConnection GetConexion()
        {
            return con;
        }

    }
}
