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
    [Route("api/Apartment")]
    public class ApartmentController : Controller
    {
        /// <summary>
        /// 
        /// </summary>
        protected readonly IApartmentRepository _ApartmentRepository;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="ApartmentRepository"></param>
        public ApartmentController(IApartmentRepository ApartmentRepository)
        {
            _ApartmentRepository = ApartmentRepository;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [Produces("application/json")]
        [SwaggerOperation("GetApartments")]
        [AllowAnonymous]
        [HttpGet]
        [Route("GetApartments")]
        public ActionResult GetApartments()
        {
            var ret = _ApartmentRepository.GetAparments();
            if (ret == null)
                return StatusCode(401);

            return Json(ret);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="idApartment"></param>
        /// <returns></returns>
        [Produces("application/json")]
        [SwaggerOperation("GetApartmentsById")]
        [AllowAnonymous]
        [HttpGet]
        [Route("api/GetApartmentsById")]
        public ActionResult GetApartmentsById(int idApartment)
        {
            var ret = _ApartmentRepository.GetAparmentById(idApartment);
            if (ret == null)
                return StatusCode(401);

            return Json(ret);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="idProject"></param>
        /// <returns></returns>
        [Produces("application/json")]
        [SwaggerOperation("GetApartmentsByIdProject")]
        [AllowAnonymous]
        [HttpGet]
        [Route("GetApartmentsByIdProject")]
        public ActionResult GetApartmentsByIdProject(int idProject)
        {
            var ret = _ApartmentRepository.GetAparmentsByProject(idProject);
            if (ret == null)
                return StatusCode(401);

            return Json(ret);
        }
    }
}