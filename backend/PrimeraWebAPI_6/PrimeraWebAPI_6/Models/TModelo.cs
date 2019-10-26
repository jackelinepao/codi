using System;
using System.Collections.Generic;

namespace PrimeraWebAPI_6.Models
{
    public partial class TModelo
    {
        public TModelo()
        {
            TVehiculo = new HashSet<TVehiculo>();
        }

        public int ModId { get; set; }
        public string ModNom { get; set; }
        public int? MarcaId { get; set; }

        public virtual TMarca Marca { get; set; }
        public virtual ICollection<TVehiculo> TVehiculo { get; set; }
    }
}
