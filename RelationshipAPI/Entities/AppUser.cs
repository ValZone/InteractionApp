using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RelationshipAPI.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; } //Ensure to code defensively to checkif string has a null value or not. Nullable is diabled. 

    }
}