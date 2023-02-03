using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;
using RelationshipAPI.Controllers;

namespace RelationshipAPI;

public class WeatherForecast
{
    public DateOnly Date { get; set; }

    public int  TemperatureC { get; set; }

    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

    public string Summary { get; internal set; }
}
