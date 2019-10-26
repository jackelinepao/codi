using System;
using System.Collections.Generic;

namespace PrimeraWebAPI_6.Models
{
    public partial class TValoracion
    {
        public int ValoId { get; set; }
        public string ValoComent { get; set; }
        public int? ValoPunt { get; set; }
        public int? AlquiId { get; set; }

        public virtual TAlquiler Alqui { get; set; }
    }
}
