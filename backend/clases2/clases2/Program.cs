using System;

namespace clases2
{
    class Program
    {
        static void Main(string[] args)
        {
            Celular miLadrillo = new Celular("Nokia","B110","celeste", "97763543", "433354666666") ;
            miLadrillo.Llamar("978765453");
            Celular micel = new Celular("Lg", "SDDD", "negro", "987654342", "4563435365");
            Console.WriteLine($"Has creado {Celular.NumeroCelulares} celulares");
            Celular.EnviarSms("dddddddd");
            Console.WriteLine($"Mi número es {miLadrillo.Numero}");
            Console.WriteLine($"Mi número es {micel.Numero}, marca {micel.GetColor()}");
            micel.SetColor("azul");
            micel.IMEI1 = "888888";
  

        }
    }
    //ctrl + . crear constructor
    //ENCAPSULAR OCULTAR DETALLES A OTRAS CLASES
    //GET(obtener), SET(establece) expresiones Lambda . 
    //prefull
    //cetor
    class Celular
    {
        string marca;
        string modelo;
        string color;
        string numero;
        string IMEI;
        static int numeroCelulares = 0;
        private string colorFunda;

        public string ColorFunda
        {
            get { return ColorFunda; }
            set { ColorFunda = value; }
        }

        public static int NumeroCelulares { get => numeroCelulares; set => numeroCelulares = value; }
        public string Numero { get => numero; set => numero = value; }
        public string IMEI1 { get => IMEI; set => IMEI = value; }

        public string GetColor()
        {
            return color;
        }
        public void SetColor(string color)
        {
            this.color = color;
        }
        public Celular()
        {
            Console.WriteLine("Se creó un celular");
        }

        public Celular(string marca, string modelo, string color, string numero, string iMEI)
        {
            this.marca = marca;
            this.modelo = modelo;
            this.color = color;
            this.numero = numero;
            IMEI = iMEI;
            NumeroCelulares++;
        }

        public void Llamar ( string numero)
        {

        } 
        public int Colgar()
        {
            return 0;
        }
        public static void EnviarSms(string text)
        {
            Console.WriteLine(text);
        }
    }
}
