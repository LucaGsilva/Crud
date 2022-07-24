using Microsoft.EntityFrameworkCore;
using Model;

namespace Desafio.Teste
{
    public class BaseTest : DbContext
    {
        protected DbContext context;
        private BaseTest(DbContextOptions options) : base(options) { }

        private DbSet<User> User { get; set; }


        protected BaseTest()
        {
            var optionsBuilder = new DbContextOptionsBuilder();
            optionsBuilder.UseInMemoryDatabase("teste");
            context = new BaseTest(optionsBuilder.Options);
        }

      
    }
}
