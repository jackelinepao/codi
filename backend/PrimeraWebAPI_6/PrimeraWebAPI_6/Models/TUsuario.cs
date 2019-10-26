using System;
using System.Collections.Generic;

namespace PrimeraWebAPI_6.Models
{
    public partial class TUsuario
    {
        public TUsuario()
        {
            TAlquiler = new HashSet<TAlquiler>();
            TDueniovehiculo = new HashSet<TDueniovehiculo>();
        }

        public int UsuId { get; set; }
        public string UsuEmail { get; set; }
        public string UsuHash { get; set; }
        public string UsuSalt { get; set; }
        public DateTime UsuFechreg { get; set; }
        public DateTime UsuFechses { get; set; }
        public string UsuImgurl { get; set; }
        public int? PerId { get; set; }
        public int? TusuId { get; set; }

        public virtual TPersona Per { get; set; }
        public virtual TipoUsuario Tusu { get; set; }
        public virtual ICollection<TAlquiler> TAlquiler { get; set; }
        public virtual ICollection<TDueniovehiculo> TDueniovehiculo { get; set; }
    }
}
