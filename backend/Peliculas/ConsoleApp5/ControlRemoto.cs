namespace ConsoleApp5
{
    internal class ControlRemoto
    {
        bool encendido =false;

        public ControlRemoto()
        {
            this.encendido = true;
        }

        public void Encender()
        {
            encendido = true;
        }
        public void Apagar()
        {
            encendido = false
        }
    }
}