
using System.Reflection.Metadata.Ecma335;
using Microsoft.EntityFrameworkCore;
using RelationshipAPI.Data;
using RelationshipAPI.Interfaces;
using RelationshipAPI.Services;

namespace RelationshipAPI.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, 
             IConfiguration config)
             {
                services.AddDbContext<DataContext>(opt => 
                {
                    opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
                 });
                services.AddCors(option => 
                    {
                        option.AddPolicy("MyPolicy",
                        builder =>
                        { builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200");
                        });
                    });

                services.AddScoped<ITokenService, TokenService>();

                return services;
             }
        
    }
}