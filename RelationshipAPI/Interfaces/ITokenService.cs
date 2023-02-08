using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RelationshipAPI.Entities;

namespace RelationshipAPI.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}