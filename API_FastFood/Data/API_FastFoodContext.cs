using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using API_FastFood.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace API_FastFood.Data
{
    public class API_FastFoodContext : IdentityDbContext<User>
    {
        public API_FastFoodContext (DbContextOptions<API_FastFoodContext> options)
            : base(options)
        {
        }

        public DbSet<Cart> Carts { get; set; } = default!;

        public DbSet<Combo> Combos { get; set; }

        public DbSet<ComboDetail> ComboDetails { get; set; }

        public DbSet<Comment> Comments { get; set; }

        public DbSet<Invoice> Invoices { get; set; }

        public DbSet<InvoiceDetail> InvoiceDetails { get; set; }

        public DbSet<Product> Products { get; set; }

        public DbSet<ProductType> ProductTypes { get; set; }

        public DbSet<Promotion> Promotions { get; set; }

        public DbSet<PromotionDetail> PromotionDetails { get; set; }

        public DbSet<Rating> Ratings { get; set; }

        public DbSet<Slideshow> Slideshows { get; set; }

        public DbSet<Wishlist> Wishlists { get; set; }
    }
}
