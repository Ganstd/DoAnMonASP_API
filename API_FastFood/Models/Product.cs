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
    public class Product
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Image { get; set; }
        [NotMapped]
        public IFormFile ImageFile { get; set; }

        [DefaultValue(0)]
        public int Price { get; set; }

        public string Description { get; set; }

        public int? ProductTypeId { get; set; }

        // Reference navigation property cho khóa ngoại đến ProductType
        public ProductType ProductType { get; set; }

        public decimal AverageStar { get; set; }

        [DefaultValue(true)]
        public bool Status { get; set; }

        public Product()
        {
            Status = true;
        }
    }
}
