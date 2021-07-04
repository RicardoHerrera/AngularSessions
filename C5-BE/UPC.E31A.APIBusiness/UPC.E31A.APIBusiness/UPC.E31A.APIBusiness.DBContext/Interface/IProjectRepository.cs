using DBEntity;
using System;
using System.Collections.Generic;
using System.Text;

namespace DBContext
{
    public interface IProjectRepository
    {
        List<EntityProject> GetProjects();
        EntityProject GetProjectById(int IdProject);
        List<EntityProject> GetProjectByParams(string direccion, string nombre, decimal precioIni, decimal precioFin);
    }
}