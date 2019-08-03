using System;
using System.Collections.Generic;
using System.Text;

namespace ejercicioClases
{
    class Cuenta
    {
        string titular;
        double cantidad;
        public Cuenta()
        {

        }

        public Cuenta(string titular)
        {
            this.titular = titular;
        }

        public Cuenta(double cantidad)
        {
            this.cantidad = cantidad;
        }

        public Cuenta(string titular, double cantidad)
        {
            this.titular = titular;
            this.cantidad = cantidad;
        }

        public string Titular { get => titular; set => titular = value; }
        public double Cantidad { get => cantidad; set => cantidad = value; }

        public double Ingresar(double cantidad)
        {
            if(cantidad >= 0)
            {
                this.cantidad += cantidad;
            }
            return this.cantidad;
        }
        public double Retirar(double cantidad)
        {
            if (cantidad >= 0 && cantidad <= this.cantidad)
            {
                this.cantidad -= cantidad;
            }
            return this.cantidad;
        }


    }
}
