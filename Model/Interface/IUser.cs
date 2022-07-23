using Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Desafio.Model.Interface
{
    public interface IUser
    {
        Task<User> Create(User user);
        Task<User> GetById(int userId);
        Task Delete(int userId);
    }
}
