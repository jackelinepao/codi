using System;
using System.Collections.Generic;

namespace PrimeraWebAPI_6.Models
{
    public partial class TDepartamento
    {
        public TDepartamento()
        {
            TProvincia = new HashSet<TProvincia>();
        }

        public int DptoId { get; set; }
        public string DptoNom { get; set; }

        public virtual ICollection<TProvincia> TProvincia { get; set; }
    }
}
