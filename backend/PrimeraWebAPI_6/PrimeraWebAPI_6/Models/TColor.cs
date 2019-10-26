using System;
using System.Collections.Generic;

namespace PrimeraWebAPI_6.Models
{
    public partial class TColor
    {
        public TColor()
        {
            TVehiculo = new HashSet<TVehiculo>();
        }

        public int ColorId { get; set; }
        public string ColorNom { get; set; }

        public virtual ICollection<TVehiculo> TVehiculo { get; set; }
    }
}
