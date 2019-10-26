using System;
using System.Collections.Generic;

namespace PrimeraWebAPI_6.Models
{
    public partial class TAlquiler
    {
        public TAlquiler()
        {
            TValoracion = new HashSet<TValoracion>();
        }

        public int AlquiId { get; set; }
        public DateTime AlquiFech { get; set; }
        public DateTime AlquiFechin { get; set; }
        public DateTime AlquiFechfin { get; set; }
        public decimal AlquiCost { get; set; }
        public string AlquiEst { get; set; }
        public int? UsuId { get; set; }
        public int? VeId { get; set; }

        public virtual TUsuario Usu { get; set; }
        public virtual TVehiculo Ve { get; set; }
        public virtual ICollection<TValoracion> TValoracion { get; set; }
    }
}
