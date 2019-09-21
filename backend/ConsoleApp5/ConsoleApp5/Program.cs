using System;
using System.Data.SqlClient;

namespace ConsoleApp5
{
    class Program
    {
        static void Main(string[] args)
        {
            SqlConnection con = new SqlConnection();
            con.ConnectionString =
                "Data source = .\\SQLEXPRESS;" + //EL SERVIDOR DONDE ESTAN LOS DATOS
                "Initial catalog = BikeStores;" + //la base de datos
                "Integrated security = true;";
            try
            {
                con.Open();
                Console.WriteLine("se conecto correctamente");
            }
            catch(Exception ex)
            {
                Console.WriteLine("no se pudo conectar");
            }
            Console.WriteLine("INGRESE SU NOMBRE");
            string nombre = Console.ReadLine();
            Console.WriteLine("INGRESE SU CLAVE");
            string clave = Console.ReadLine();
            SqlCommand cmd = new SqlCommand($"SELECT * FROM usuarios WHERE nombre = '{nombre}' and clave ='{clave}'", con);//cmd = new SqlCommand(comando, conexion)
            var resultado = cmd.ExecuteScalar();//ejecuta un comando y devuelve el primer valor
            if (resultado == null)
                Console.WriteLine("\n","No hubo resultados");
            else
                Console.WriteLine("\n" + resultado.ToString());

            cmd = new SqlCommand($"SELECT count(*) FROM usuarios WHERE nombre = '{nombre}' and clave ='{clave}'", con);//cmd = new SqlCommand(comando, conexion)
            int rest = Convert.ToInt32(cmd.ExecuteScalar());
            Console.WriteLine($"Se encontraron {rest} resultado(s).");

            //insert
            Console.WriteLine("CREAR UN USUARIO");
            Console.WriteLine("INGRESE SU NOMBRE");
            string nombrenew = Console.ReadLine();
            Console.WriteLine("INGRESE SU CLAVE");
            string clavenew = Console.ReadLine();
            cmd = new SqlCommand($"INSERT INTO usuarios (NOMBRE, CLAVE) VALUES ('{nombrenew}', '{clavenew}')", con);
            cmd.ExecuteNonQuery();

            //update
            Console.WriteLine("EDITAR UN USUARIO");
            Console.WriteLine("Ingresar el usuario");
            nombre = Console.ReadLine();
            Console.WriteLine("Ingresar nueva contraseña");
            clavenew = Console.ReadLine();
            cmd = new SqlCommand($"UPDATE usuarios SET CLAVE = '{clavenew}'WHERE nombre = '{nombre}'", con);
            cmd.ExecuteNonQuery();

            //ELIMINAR
            Console.WriteLine("ELIMINAR UN USUARIO");
            Console.WriteLine("Ingresar el usuario");
            nombre = Console.ReadLine();
            cmd = new SqlCommand($"DELETE FROM usuarios WHERE nombre = '{nombre}'", con);
            cmd.ExecuteNonQuery();

            //CONSULTAR TODOS LOS USUARIOS
            Console.WriteLine("TODOS LOS USUARIOS");
            cmd = new SqlCommand($"SELECT nombre, clave FROM usuarios ORDEN BY nombre", con);

            SqlDataReader reader = cmd.ExecuteReader();
            //data reader se encarga de leer y almacenar datos de una consulta
            while (reader.Read())
            {
                Console.WriteLine(read                                                                                                                                                                                                                           nbbnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn  |1qqqqqqqqqqqqqqqqqqq|  11zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 er[0]+"\t\t"+ reader[1]);
            }


            try
            {
                con.Close();
                Console.WriteLine("Se desconecto");
            }
            catch (Exception ex)
            {
                Console.WriteLine("No se pudo desconectar");
            }
            

        }
    }
}
