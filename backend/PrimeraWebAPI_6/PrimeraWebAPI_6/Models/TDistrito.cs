using System;
using System.Collections.Generic;

namespace PrimeraWebAPI_6.Models
{
    public partial class TDistrito
    {
        public TDistrito()
        {
            TVehiculo = new HashSet<TVehiculo>();
        }

        public int DistId { get; set; }
        public string DistNom { get; set; }
        public int? ProvId { get; set; }

        public virtual TProvincia Prov { get; set; }
        public virtual ICollection<TVehiculo> TVehiculo { get; set; }
    }
}
