using Dapper;
using DBEntity;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace DBContext
{
    public class ApartmentRepository : BaseRepository, IApartmentRepository
    {
        public List<EntityAparment> GetAparments()
        {
            var returnEntity = new List<EntityAparment>();

            try
            {
                using (var db = GetSqlConnection())
                {
                    const string sql = @"usp_ObtenerDepartamentos";
                    returnEntity = db.Query<EntityAparment>(sql, commandType: CommandType.StoredProcedure).ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return returnEntity;
        }

        public EntityAparment GetAparmentById(int idAparment)
        {
            var returnEntity = new EntityAparment();

            try
            {
                using (var db = GetSqlConnection())
                {
                    var p = new DynamicParameters();
                    p.Add("@IDDEPARTAMENTO", idAparment, dbType: DbType.Int32, ParameterDirection.Input);

                    const string sql = @"usp_ObtenerDepartamentos_By_Id";
                    returnEntity = db.Query<EntityAparment>(sql, param: p, commandType: CommandType.StoredProcedure).FirstOrDefault();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return returnEntity;
        }

        public List<EntityAparment> GetAparmentsByProject(int idProject)
        {
            var returnEntity = new List<EntityAparment>();

            try
            {
                using (var db = GetSqlConnection())
                {
                    var p = new DynamicParameters();
                    p.Add(name: "@IDPROYECTO", value: idProject, dbType: DbType.Int32, direction: ParameterDirection.Input);

                    const string sql = @"usp_ObtenerDepartamentos_By_IdProyecto";
                    returnEntity = db.Query<EntityAparment>(sql, param: p, commandType: CommandType.StoredProcedure).ToList();
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