using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;

namespace API_FastFood.Models
{
    public class ProductImage
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }


        [DefaultValue(0)]
        public int Price { get; set; }

        public string Description { get; set; }

        public int? ProductTypeId { get; set; }

        public decimal AverageStar { get; set; }

        [DefaultValue(true)]
        public bool Status { get; set; }
        public ProductImage()
        {
            Status = true;
        }

        public IFormFile Image { get; set; }
    }
}
