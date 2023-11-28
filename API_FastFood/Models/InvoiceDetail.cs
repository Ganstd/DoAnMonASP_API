using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using API_FastFood.Models;

namespace API_FastFood.Models
{
    public class InvoiceDetail
    {
        public int Id { get; set; }

        public int InvoiceId { get; set; }

        // Reference navigation property cho khóa ngoại đến Invoice
        public Invoice Invoice { get; set; }

        public int? ProductId { get; set; }

        // Navigation reference property cho khóa ngoại đến Product
        public Product Product { get; set; }

        public int? ComboId { get; set; }

        // Reference navigation property cho khóa ngoại đến Combo
        public Combo Combo { get; set; }

        [DefaultValue(1)]
        public int Quantity { get; set; }

        [DefaultValue(0)]
        public int Price { get; set; }

        public InvoiceDetail()
        {
            Quantity = 1;
            Price = 0;
        }
    }
}
