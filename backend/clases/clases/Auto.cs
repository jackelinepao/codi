using System;
using System.Collections.Generic;
using System.Text;

namespace clases
{
    class Auto
    {
        //Atributos privados(solo se usa dento de la clase) public(cualquiera puede usar
        public string marca;
        public string modelo;
        public int año;
        //metodos
        public Auto(string marca, string modelo, int año)
        {
            this.marca = marca;
            this.modelo = modelo;
            this.año = año;
        }
        public Auto()
        {
            Console.WriteLine("se creo un auto");
        }

        public Auto(string marca, string modelo)
        {
            this.marca = marca;
            this.modelo = modelo;
        }

        public void Arrancar()
        {
            //Atropellar();
            Console.WriteLine("Ruuum");
        }
         public void Atropellar(string nombre)
        {
            Console.WriteLine($"{nombre} grita ahhhhhhh!");

        }
        public void Atropellar(string atropellado, string testigo)
        {
            Console.WriteLine($"{atropellado} grita ahhhhhhh!");

            Console.WriteLine($"{atropellado} grita policia!");
            Auto superAuto = new Auto("Daewoo", "Tico", 2001);
            Console.WriteLine($"Este es mi superauto {superAuto.modelo} del {superAuto.año}");

        }
      
    }
}
