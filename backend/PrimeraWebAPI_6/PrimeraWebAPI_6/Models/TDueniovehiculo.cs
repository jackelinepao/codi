using System;
using System.Collections.Generic;

namespace PrimeraWebAPI_6.Models
{
    public partial class TDueniovehiculo
    {
        public int DveId { get; set; }
        public int? UsuId { get; set; }
        public int? VeId { get; set; }

        public virtual TUsuario Usu { get; set; }
        public virtual TVehiculo Ve { get; set; }
    }
}
