﻿using API_FastFood.Models;
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
    public class PromotionDetail
    {
        public int Id { get; set; }
        public int PromotionId { get; set; }
        // Reference navigation property cho khóa ngoại đến Promotion
        public Promotion Promotion { get; set; }
        public int ProductId { get; set; }

        // Reference navigation property cho khóa ngoại đến Product
        public Product Product { get; set; }

        public decimal Discount { get; set; }

    }
}
