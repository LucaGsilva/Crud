using Desafio;
using Desafio.Domain.Service;
using Microsoft.AspNetCore.Mvc;
using Model;
using System;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace ManagerUser.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {

        private readonly UserService _userService;

        public UserController(DesafioContext context)
        {
            _userService = new UserService(context);
        }

        [HttpPost]
        public async Task<ApplicationResult> Create(User user)
        {

            var result = new ApplicationResult();
            try
            {
                result.Data = await _userService.Create(user);

                return result;
            }
            catch (Exception e ) {
                return new ApplicationResult() { Code = (int) HttpStatusCode.BadRequest ,Messages = e.Message.ToString() };
            }
            
        }

        [HttpPut]
        public async Task<ApplicationResult> Update(User user)
        {

            var result = new ApplicationResult();
            try
            {
                result.Data = await _userService.Update(user);

                return result;
            }
            catch (Exception e)
            {
                return new ApplicationResult() { Code = (int)HttpStatusCode.BadRequest, Messages = e.Message.ToString() };
            }


        }

        [HttpGet("{id?}")]
        public async Task<ApplicationResult> Index(int? id)
        {
            var result = new ApplicationResult();
            result.Data = await _userService.GetById((int)id);
            return result;
        }

        [HttpGet]
        public async Task<ApplicationResult> GetAll()
        {
            var result = new ApplicationResult();
            result.Data = await _userService.GetAll();
            return result;
        }


        [HttpDelete("{id?}")]
        public async Task<ApplicationResult> DeleteUser(int? id)
        {
            var result = new ApplicationResult();
            await _userService.Delete((int) id);
            return result;
        }

    }
}
