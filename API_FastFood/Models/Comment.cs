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
    public class Comment
    {
        public int Id { get; set; }

        public string UserId { get; set; }

        // Reference navigation property cho khóa ngoại đến User
        [ForeignKey("UserId")]
        public User User { get; set; }

        public int? ProductId { get; set; }

        // Reference navigation property cho khóa ngoại đến Product
        public Product Product { get; set; }

        public int? ComboId { get; set; }

        // Reference navigation property cho khóa ngoại đến Combo
        public Combo Combo { get; set; }
        public string CommentText { get; set; }
        public DateTime CommentDate { get; set; }
        public int? ParentCommentId { get; set; }

        [ForeignKey("ParentCommentId")]
        public Comment ParentComment { get; set; }

    }
}
