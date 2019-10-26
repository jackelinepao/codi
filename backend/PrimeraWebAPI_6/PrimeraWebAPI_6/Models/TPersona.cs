using System;
using System.Collections.Generic;

namespace PrimeraWebAPI_6.Models
{
    public partial class TPersona
    {
        public TPersona()
        {
            TUsuario = new HashSet<TUsuario>();
        }

        public int PerId { get; set; }
        public string PerNom { get; set; }
        public string PerApe { get; set; }
        public string PerDir { get; set; }
        public string PerTel { get; set; }

        public virtual ICollection<TUsuario> TUsuario { get; set; }
    }
}
