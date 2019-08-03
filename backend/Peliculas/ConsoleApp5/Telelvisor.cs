using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp5
{
    class Telelvisor
    {
        double _precio;
        string _color;
        int _pulgadas;
        char _consumoEnergetico;
        ControlRemoto Control = new ControlRemoto();
        public Telelvisor()
        {
            _precio = 1000;
            _color = "Blanco";
            _pulgadas = 32;
            _consumoEnergetico = 'F';
        }
        public override string ToString()
        {
            return $"Precio: {_precio}\nColor: {_color}\npulgadas: {_pulgadas}\nConsumo Energetico: {_consumoEnergetico}";
        }
        public Telelvisor(double precio, int pulgadas)
        {
            _precio = precio;
            _pulgadas = pulgadas;
        }

        public Telelvisor(double precio, string color, int pulgadas, char consumoEnergetico)
        {
            _precio = precio;
            _color = color;
            _pulgadas = pulgadas;
            _consumoEnergetico = consumoEnergetico;
        }
        public double Precio { get => _precio; set => _precio = value; }
        public string Color { get => _color; set => _color = value; }
        public int Pulgadas { get => _pulgadas; set => _pulgadas = value; }
        public char ConsumoEnergetico { get => _consumoEnergetico; set => _consumoEnergetico = value; }
        
        public void ComprobarDisponibilidadColor()
        {
            if(_color == "Blanco" || _color == "Negro" || _color == "gris")
            {
                Console.WriteLine("Disponible");
            }
            else
            {
                Console.WriteLine("No Disponible");
            }
        }
        public void ComprobarConsumo()
        {

            if (_consumoEnergetico == 'A')
            {
                _precio += 100;
            }
            else if (_consumoEnergetico == 'B')
            {
                _precio += 80;
            }
            else if (_consumoEnergetico == 'C')
            {
                _precio += 60;
            }
            else if (_consumoEnergetico == 'D')
            {
                _precio += 40;
            }
            else if (_consumoEnergetico == 'D')
            {
                _precio += 30;
            }
            else if (_consumoEnergetico == 'F')
            {
                _precio += 20;  
            }
            else
            {
                _precio += 20;
            }
        }
        public void ComprobarPulgadas()
        {
            if (_pulgadas == 32)
            {
                this._precio += 100;
            }else if(_pulgadas == 40)
            {
                this._precio += 150;
            }
            else if (_pulgadas == 48)
            {
                this._precio += 200;
            }
            else if (_pulgadas == 55)
            {
                this._precio += 150;
            }
            else
            {
                this._precio += 100;
            }
        }

    }
}
