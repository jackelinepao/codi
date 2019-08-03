using System;
using System.Collections.Generic;
using System.Text;

namespace ejercicioClases
{
    class Persona
    {
        string nombre;
        int edad;
        string dni;
        char sexo;
        double peso;
        double altura;
        public Persona()
        {

        }
        public Persona(string nombre, int edad, char sexo)
        {
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
        }
        public Persona(string nombre, int edad, char sexo, double peso, double altura)
        {
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
            this.peso = peso;
            this.altura = altura;
        }

        public string Nombre { get => nombre; set => nombre = value; }
        public int Edad { get => edad; set => edad = value; }
        public string Dni { get => dni; set => dni = value; }
        public char Sexo { get => sexo; set => sexo = value; }
        public double Peso { get => peso; set => peso = value; }
        public double Altura { get => altura; set => altura = value; }

        public void CalcularPesoIdeal()
        {
            double pesoIdeal = this.peso / Math.Pow(this.altura, 2);
            Console.WriteLine(pesoIdeal);
            if (pesoIdeal > 0 && pesoIdeal < 20)
            {
                Console.WriteLine("Esta bajo");
            } else if (pesoIdeal >= 20 && peso < 25) {
                Console.WriteLine("Peso ideal");
            } else if (pesoIdeal >= 25)
            {
                Console.WriteLine("Sobrepeso");
            }
            //mayor de edad
            // validar el sexo
        }
        public void ValidarEdad()
        {
            if (this.edad > 0 && edad < 18)
            {
                Console.WriteLine("Es menor de edad");
            } else if (this.edad >= 18)
            {
                Console.WriteLine("Es mayor de edad");
            }
            else
            {
                Console.WriteLine("No es una edad valida");
            }
        }
        public void ValidarSexo()
        {
            if (this.sexo == 'F')
            {
                Console.WriteLine("El sexo es correcto");
            }
            else if (this.sexo == 'M')
            {
                Console.WriteLine("El sexo es correcto");
            }
            else
            {
                Console.WriteLine("No es una opción valida");
            }
        }
        public void MostrarInformacion()
        {
            Console.WriteLine($"Nombre: {this.nombre}\nDNI: {this.dni}\nEdad: {this.edad}\nSexo: {this.sexo}\nPeso: {this.peso}\nAltura: {this.altura}");
        }
        public void GenerarDni()
        {
            Random r = new Random();
            int numeroGenerado = r.Next(1000000, 100000000);
            string dniGenerado = "";
           
            if(numeroGenerado <= 100000000 && numeroGenerado <= 9999999)
            {
                dniGenerado = "0" + numeroGenerado;
            }
            else
            {
                dniGenerado = numeroGenerado.ToString();
            }
            this.dni = dniGenerado;
        }
    }
}
