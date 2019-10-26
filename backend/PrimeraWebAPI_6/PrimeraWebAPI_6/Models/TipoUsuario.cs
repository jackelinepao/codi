using System;
using System.Collections.Generic;

namespace PrimeraWebAPI_6.Models
{
    public partial class TipoUsuario
    {
        public TipoUsuario()
        {
            TUsuario = new HashSet<TUsuario>();
        }

        public int TusuId { get; set; }
        public string TusuDesc { get; set; }

        public virtual ICollection<TUsuario> TUsuario { get; set; }
    }
}
