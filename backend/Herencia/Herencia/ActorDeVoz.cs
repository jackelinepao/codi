namespace Herencia
{
    class ActorDeVoz : Actor
    {
        //string nombre;
        //string genero;
        //string[] personajes;
        string tipoDeVoz;

        public override string ToString()
        {
            return $"Nombre: {Nombre}\nGenero: {genero}\nTipo de voz: {tipoDeVoz}";
        }
        //base == padre
        public ActorDeVoz() : base("Cristina", "Thriller")
        {
            Nombre = "Cristina";
        }
        public ActorDeVoz(string nombre, string genero, string tipoDeVoz):base(nombre,genero)
        {
            this.tipoDeVoz = tipoDeVoz;
        }
        public string TipoDeVoz { get => tipoDeVoz; set => tipoDeVoz = value; }
    }
}
