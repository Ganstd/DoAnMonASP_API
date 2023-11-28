using API_FastFood.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_FastFood.Models
{
    public class Promotion
    {
        public int Id { get; set; }
        public string Name { get; set; }
        
        public decimal Discount { get; set; }
        public int? ProductId { get; set; }

        // Reference navigation property cho khóa ngoại đến Product
        public Product Product { get; set; }

        public int? ProductTypeId { get; set; }

        // Reference navigation property cho khóa ngoại đến ProductType
        public ProductType ProductType { get; set; }

        public int? InvoiceId { get; set; }

        // Reference navigation property cho khóa ngoại đến Invoice
        public Invoice Invoice { get; set; }

        public DateTime StartDay { get; set; }
        public DateTime EndDay { get; set; }
    }
}
