using DBEntity;
using System;
using System.Collections.Generic;
using System.Text;

namespace DBContext
{
    public interface IApartmentRepository
    {
        List<EntityAparment> GetAparments();
        EntityAparment GetAparmentById(int idAparment);
        List<EntityAparment> GetAparmentsByProject(int idProject);
    }
}