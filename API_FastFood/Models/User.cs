using Microsoft.AspNetCore.Identity;

namespace API_FastFood.Models
{
    public class User : IdentityUser
    {
        public string Name { get; set; }

    }
}
