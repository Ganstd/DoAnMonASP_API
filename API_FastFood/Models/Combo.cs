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
    public class Combo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public int Price { get; set; }
        public int NewPrice { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
        public Combo()
        {
            Status = true;
        }

    }
}
