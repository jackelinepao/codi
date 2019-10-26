using System;
using System.Collections.Generic;

namespace PrimeraWebAPI_6.Models
{
    public partial class TMarca
    {
        public TMarca()
        {
            TModelo = new HashSet<TModelo>();
        }

        public int MarcaId { get; set; }
        public string MarcaNom { get; set; }

        public virtual ICollection<TModelo> TModelo { get; set; }
    }
}
