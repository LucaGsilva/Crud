using Desafio.Model.Interface;
using Desafio.Model.Model;
using Desafio.Model.Repository;
using Microsoft.EntityFrameworkCore;
using Model;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Desafio.Domain.Service
{
    public class UserService : IUser
    {
        private readonly UserRepository _userRepository;

        public UserService(DbContext dBContext)
        {
            _userRepository = new UserRepository(dBContext);
        }

        public async Task<User> Create(User user)
        {

            if(user == null)
                throw new ArgumentException("Não é possivel inserir um usuário nulo");

            if (string.IsNullOrEmpty(user.Name) && string.IsNullOrEmpty(user.LastName) || string.IsNullOrEmpty(user.Email))
                throw new ArgumentException("Dados insuficientes para cadastrar o usuário");
            
                
             if (user.Id == 0)
            {

                var Schooling = Enum.GetName(typeof(SchoolingEnum), user.Schooling);

                if (Schooling == null)
                {
                    user.Schooling = (int) SchoolingEnum.INFANTIL;
                }

                
                return await _userRepository.Create(user);
            }
            else
            {
                throw new ArgumentException("Já existe usuário cadastrado para o id informado");
             }
        
        }

        public async Task<User> Update(User user)
        {

            if (user == null) throw new ArgumentException("Dados insuficientes para atualizar o usuário");
            
            if (user.Id != 0)
            {

                var userValid = await _userRepository.FindId(user.Id);

                if (userValid == null) {
                    throw new ArgumentException("Não existe usuário para o id informado");
                } 

                var Schooling = Enum.GetName(typeof(SchoolingEnum), user.Schooling);

                if (Schooling == null)
                {
                    user.Schooling = (int)SchoolingEnum.INFANTIL;
                }

                return await _userRepository.Update(user);
            }
            else
            {
                throw new ArgumentException("Não existe usuário cadastrado para o id informado");
            }

        }

        public async Task<User> GetById(int userId)
        {
            return await _userRepository.FindId(userId);
        }

        public async Task<IEnumerable<User>> GetAll()
        {
            return await _userRepository.GetAll();
        }

        public async Task Delete(int userId)
        {
            var oldUser = await _userRepository.FindId(userId);

            if(oldUser == null)
            {
                throw new ArgumentException("Não existe usuário cadastrado para o id informado");
            }

            oldUser.Active = false;

            await _userRepository.Update(oldUser);
        }


        

    }
}
