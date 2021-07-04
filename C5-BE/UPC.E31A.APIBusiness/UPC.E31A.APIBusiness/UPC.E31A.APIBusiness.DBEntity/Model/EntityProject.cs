using System;
using System.Collections.Generic;
using System.Text;

namespace DBEntity
{
    public class EntityProject : EntityBase
    {
        public int IdProyecto { get; set; }
        public string nombre { get; set; }
        public decimal precio { get; set; }
        public string direccion { get; set; }
        public string ubicacion { get; set; }

        public List<EntityAparment> apartments { get; set; }
    }
}