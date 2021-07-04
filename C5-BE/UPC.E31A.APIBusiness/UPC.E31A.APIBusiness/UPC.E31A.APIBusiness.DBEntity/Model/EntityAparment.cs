using System;
using System.Collections.Generic;
using System.Text;

namespace DBEntity
{
    public class EntityAparment : EntityBase
    {
		public int IdDepartamento { get; set; }
		public int IdProyecto { get; set; }
		public string Nombre_Proyecto { get; set; }
		public string Nombre { get; set; }
		public string Tamanio { get; set; }
		public string Piso { get; set; }
		public string Tipo { get; set; }
	}
}