using Dapper;
using DBEntity;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace DBContext
{
    public class ProjectRepository : BaseRepository, IProjectRepository
    {
        public List<EntityProject> GetProjects()
        {
            var returnEntity = new List<EntityProject>();

            try
            {
                using (var db = GetSqlConnection())
                {
                    const string sql = @"usp_ObtenerProyectos";

                    returnEntity = db.Query<EntityProject>(sql, commandType: CommandType.StoredProcedure).ToList();
                }
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
            
            return returnEntity;
        }

        public EntityProject GetProjectById(int IdProject)
        {
            List<EntityAparment> _apartments = new List<EntityAparment>();
            ApartmentRepository _apartmentRepository = new ApartmentRepository();

            var returnEntity = new EntityProject();

            try
            {
                _apartments = _apartmentRepository.GetAparmentsByProject(IdProject);

                using (var db = GetSqlConnection())
                {
                    var p = new DynamicParameters();
                    p.Add(name: "@IDPROYECTO", value: IdProject, dbType: DbType.Int32, direction: ParameterDirection.Input);

                    const string sql = @"usp_ObtenerProyectos_By_Id";

                    returnEntity = db.Query<EntityProject>(sql, p, commandType: CommandType.StoredProcedure).FirstOrDefault();
                }

                if(returnEntity != null)
                {
                    returnEntity.apartments = _apartments;
                }
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);

            }
            
            return returnEntity;
        }

        public List<EntityProject> GetProjectByParams(string direccion, string nombre, decimal precioIni, decimal precioFin)
        {
            var returnEntity = new List<EntityProject>();

            try
            {      
                using (var db = GetSqlConnection())
                {
                    var p = new DynamicParameters();
                    p.Add(name: "@DIR", value: direccion, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add(name: "@NOMBRE", value: nombre, dbType: DbType.String, direction: ParameterDirection.Input);
                    p.Add(name: "@PDESDE", value: precioIni, dbType: DbType.Decimal, direction: ParameterDirection.Input);
                    p.Add(name: "@PHASTA", value: precioFin, dbType: DbType.Decimal, direction: ParameterDirection.Input);

                    const string sql = @"usp_ObtenerProyectos_By_Id";

                    returnEntity = db.Query<EntityProject>(sql, p, commandType: CommandType.StoredProcedure).ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);

            }

            return returnEntity;
        }
    }
}