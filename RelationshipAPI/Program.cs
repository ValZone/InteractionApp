using Microsoft.EntityFrameworkCore;
using RelationshipAPI.Data;

var builder = WebApplication.CreateBuilder(args); // Go ahead to create an instance of the WebApplication

// Add services to the container. Services Container

builder.Services.AddControllers();
builder.Services.AddDbContext<DataContext>(opt => 
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors(option => 
{
    option.AddPolicy("MyPolicy",
    builder =>
    { builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200");
    });
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure Middlewares
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors("MyPolicy");
}


app.UseHttpsRedirection();

app.UseCors("MyPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
