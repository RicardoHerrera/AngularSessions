using DBContext;
using DBEntity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using NSwag.Annotations;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;

namespace UPC.Business.API.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    [Produces("application/json")]
    [Route("api/Project")]
    public class ProjectController : Controller
    {
        /// <summary>
        /// 
        /// </summary>
        protected readonly IProjectRepository _ProjectRepository;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="ProjectRepository"></param>
        public ProjectController(IProjectRepository ProjectRepository)
        {
            _ProjectRepository = ProjectRepository;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [Produces("application/json")]
        [SwaggerOperation("GetProjects")]
        [AllowAnonymous]
        [HttpGet]
        [Route("GetProjects")]
        public ActionResult GetProjects()
        {
            var ret = _ProjectRepository.GetProjects();
            if (ret == null)
                return StatusCode(401);

            return Json(ret);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Produces("application/json")]
        [SwaggerOperation("GetProjectById")]
        [AllowAnonymous]
        [HttpGet]
        [Route("GetProjectById")]
        public ActionResult GetProjectById(int id)
        {
            var ret = _ProjectRepository.GetProjectById(id);
            if (ret == null)
                return StatusCode(401);

            return Json(ret);
        }


        [Produces("application/json")]
        [SwaggerOperation("GetProjectByparams")]
        [AllowAnonymous]
        [HttpGet]
        [Route("GetProjectByparams")]
        public ActionResult GetProjectByparams(string direccion, string nombre, decimal precioIni, decimal precioFin)
        {
            var ret = _ProjectRepository.GetProjectByParams(direccion, nombre, precioIni, precioFin);
            if (ret == null)
                return StatusCode(401);

            return Json(ret);
        }
    }
}
