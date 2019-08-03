using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp5
{
    class Pelicula
    {
        int id_pelicula;
        string titulo_pelicula;
        double precio;
        int disponibilidad;
        int puntuacion;

        public int Id_pelicula { get => id_pelicula; set => id_pelicula = value; }
        public string Titulo_pelicula { get => titulo_pelicula; set => titulo_pelicula = value; }
        public double Precio { get => precio; set => precio = value; }
        public int Disponibilidad { get => disponibilidad; set => disponibilidad = value; }
        public int Puntuacion { get => puntuacion; set => puntuacion = value; }

        public override string ToString()
        {
            return $"Id Pelicula: {id_pelicula}\nTitulo: {titulo_pelicula}";
        }
        public Pelicula()
        {

        }

        public Pelicula(int id_pelicula, string titulo_pelicula, double precio, int disponibilidad, int puntuacion)
        {
            this.id_pelicula = id_pelicula;
            this.titulo_pelicula = titulo_pelicula;
            this.precio = precio;
            this.disponibilidad = disponibilidad;
            this.puntuacion = puntuacion;
        }
    }
}
