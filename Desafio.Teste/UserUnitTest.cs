
using Desafio.Domain.Service;
using Model;
using NUnit.Framework;
using System;
using System.Threading.Tasks;

namespace Desafio.Teste
{


    [TestFixture]
    public class UserUnitTest : BaseTest
    {

        private UserService _userService;

        public UserUnitTest()
        {
            _userService = new UserService(this.context);
        }

        [SetUp]
        public void Setup()
        {

        }

        [Test]
        public void ValidateCreateNullUser()
        {
            
            Assert.ThrowsAsync<System.ArgumentException>(async () => { await _userService.Create(null); });
        }

        [Test]
        public async Task ValidateCreateUser()
        {
            User user = new User()
            {
                Email = "teste@gmail.com",
                BirthDate = DateTime.Now,
                Schooling = 1,
                Name = "teste",
                LastName = "teste",
            };

            var newUser =  await _userService.Create(user);

            Assert.IsNotNull(newUser);

        }

        [Test]
        public async Task ValidateCreateUserEmpty()
        {
            User user = new User();

           
            Assert.ThrowsAsync<System.ArgumentException>(async () => { await _userService.Create(user); });


        }

        [Test]
        public async Task ValidateGetUserById()
        {
            User user = new User()
            {
                Email = "teste@gmail.com",
                BirthDate = DateTime.Now,
                Schooling = 1,
                Name = "teste",
                LastName = "teste",
            };

            var newUser = await _userService.Create(user);
            
            var findUser = await _userService.GetById(newUser.Id);

            Assert.AreEqual(findUser.Id, newUser.Id);


        }


        [Test]
        public async Task ValidateUpdateNonexistentUser()
        {

            User user = new User()
            {
                Id = 100,
                Email = "update@gmail.com",
                BirthDate = DateTime.Now,
                Schooling = 1,
                Name = "update",
                LastName = "update",
            };
           
            Assert.ThrowsAsync<System.ArgumentException>(async () => { await _userService.Update(user); });


        }


        [Test]
        public async Task ValidateDeleteNonexistentUser()
        {

            Assert.ThrowsAsync<System.ArgumentException>(async () => { await _userService.Delete(300); });


        }




    }
}
