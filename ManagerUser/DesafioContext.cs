using Microsoft.EntityFrameworkCore;
using Model;
using System;

namespace Desafio
{
    public class DesafioContext : DbContext
    {
        public DesafioContext(DbContextOptions options) : base(options) { }

        public DbSet<User> User { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase("teste");
            //optionsBuilder.UseSqlServer("Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=desafio;Data Source=NTBPE06K7LZ\\SQLEXPRESS");

            base.OnConfiguring(optionsBuilder);
        }

    }
}
