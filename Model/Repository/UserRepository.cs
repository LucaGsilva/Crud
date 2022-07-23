

using Microsoft.EntityFrameworkCore;
using Model;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Desafio.Model.Repository
{
    public class UserRepository : Repository<int, User>
    {
      

        public UserRepository(DbContext dBContext) : base(dBContext)
        {
        }


        public async Task<IEnumerable<User>> GetAll()
        {

            var query = from user in this.dbSet
                        where user.Active == true
                        select user;

            return await query.AsNoTracking().ToListAsync();

        }

        public async Task<User> FindId(int idUser)
        {
            
            var query = from user in this.dbSet
                        where user.Active == true && user.Id == idUser
                        select user;

            return await query.AsNoTracking().FirstOrDefaultAsync();            

        }

    }
        
}
