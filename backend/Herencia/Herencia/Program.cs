using System;

namespace Herencia
{
    class Program
    {
        static void Main(string[] args)
        {
            ActorDeVoz act = new ActorDeVoz();
            act.TipoDeVoz = "goku";
            ActorDeVoz act1 = new ActorDeVoz();
            Console.WriteLine(act1);
            ActorDeVoz act2 = new ActorDeVoz("Mario", "Triller", "Aguda");
            Console.WriteLine(act2);
        }
    }
}
