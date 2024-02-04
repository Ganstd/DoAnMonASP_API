using System.ComponentModel.DataAnnotations;

namespace API_FastFood.Models
{
    public class ResetPasswordModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string NewPassword { get; set; }
        [Required]
        public string ConfirmPassword { get; set; }
    }
}
