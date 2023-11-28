﻿using Microsoft.AspNetCore.Identity;

namespace API_FastFood.Models
{
    public class User : IdentityUser
    {
        public string FullName { get; set; }

        public DateTime Birthday { get; set; }
    }
}
