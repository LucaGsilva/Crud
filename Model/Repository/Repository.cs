using Microsoft.EntityFrameworkCore;
using Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Desafio.Model.Repository
{
    public class Repository<TId, TEntity> where TEntity : class
    {
          protected readonly DbContext _dbContext;
          protected DbSet<TEntity> dbSet;

          protected Repository(DbContext dBContext)
          {
              _dbContext = dBContext;
              dbSet = _dbContext.Set<TEntity>();
          }

          public async Task<TEntity> Create(TEntity entity)
          {
              this.dbSet.Add(entity);
              await this._dbContext.SaveChangesAsync();
              return entity;
          }

        public async Task<TEntity> Update(TEntity entity)
        {
            this.dbSet.Update(entity);
            await this._dbContext.SaveChangesAsync();
            return entity;
        }
        
        public async Task<TEntity> Find(TId id) 
        { 
            return this.dbSet.Find(id);
        }

    } 
 
}
