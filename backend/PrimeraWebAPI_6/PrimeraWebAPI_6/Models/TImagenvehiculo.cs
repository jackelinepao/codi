using System;
using System.Collections.Generic;

namespace PrimeraWebAPI_6.Models
{
    public partial class TImagenvehiculo
    {
        public int ImaId { get; set; }
        public string ImaUrl { get; set; }
        public int? VeId { get; set; }

        public virtual TVehiculo Ve { get; set; }
    }
}
