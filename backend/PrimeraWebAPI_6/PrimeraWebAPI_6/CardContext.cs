using Microsoft.EntityFrameworkCore;
using PrimeraWebAPI_6.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PrimeraWebAPI_6
{
    public class CardContext : DbContext
    {
        public CardContext(DbContextOptions<CardContext> options) : base(options)
        {

        } 
        public DbSet <Card> Cards { get; set; }
    }
}
