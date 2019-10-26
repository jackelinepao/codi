using System;
using System.Collections.Generic;

namespace PrimeraWebAPI_6.Models
{
    public partial class TTipovehiculo
    {
        public TTipovehiculo()
        {
            TVehiculo = new HashSet<TVehiculo>();
        }

        public int TveId { get; set; }
        public string TveNom { get; set; }

        public virtual ICollection<TVehiculo> TVehiculo { get; set; }
    }
}
