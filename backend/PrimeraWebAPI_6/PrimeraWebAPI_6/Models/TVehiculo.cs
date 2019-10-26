using System;
using System.Collections.Generic;

namespace PrimeraWebAPI_6.Models
{
    public partial class TVehiculo
    {
        public TVehiculo()
        {
            TAlquiler = new HashSet<TAlquiler>();
            TDueniovehiculo = new HashSet<TDueniovehiculo>();
            TImagenvehiculo = new HashSet<TImagenvehiculo>();
        }

        public int VeId { get; set; }
        public int VeNrop { get; set; }
        public int VeNroa { get; set; }
        public int VeAnio { get; set; }
        public DateTime VeFechrt { get; set; }
        public decimal VePrec { get; set; }
        public DateTime VeFechvs { get; set; }
        public string VePoliza { get; set; }
        public string VePlaca { get; set; }
        public int? ColorId { get; set; }
        public int? ModId { get; set; }
        public int? TveId { get; set; }
        public int? DistId { get; set; }

        public virtual TColor Color { get; set; }
        public virtual TDistrito Dist { get; set; }
        public virtual TModelo Mod { get; set; }
        public virtual TTipovehiculo Tve { get; set; }
        public virtual ICollection<TAlquiler> TAlquiler { get; set; }
        public virtual ICollection<TDueniovehiculo> TDueniovehiculo { get; set; }
        public virtual ICollection<TImagenvehiculo> TImagenvehiculo { get; set; }
    }
}
