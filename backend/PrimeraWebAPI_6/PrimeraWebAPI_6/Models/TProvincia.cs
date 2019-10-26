using System;
using System.Collections.Generic;

namespace PrimeraWebAPI_6.Models
{
    public partial class TProvincia
    {
        public TProvincia()
        {
            TDistrito = new HashSet<TDistrito>();
        }

        public int ProvId { get; set; }
        public string ProvNom { get; set; }
        public int? DptoId { get; set; }

        public virtual TDepartamento Dpto { get; set; }
        public virtual ICollection<TDistrito> TDistrito { get; set; }
    }
}
