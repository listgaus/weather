import { Injectable } from '@angular/core';
import { Store } from './store';
import { CityInfo } from '../models/city';
import { ApiClientService } from './api-client.service';

export class WeatherState {
  options = ['Tel-Aviv', 'Jerusalem', 'Dubai', 'Antalya', 'Mecca', 'Cairo', 'Riyadh','Abu Dhabi', 'Istanbul', 'Medina'];  
  cities: CityInfo[] = [];
}

@Injectable({
  providedIn: 'root',
})
export class WeatherStore extends Store<WeatherState> {
  constructor(
    private dataService: ApiClientService
  ) {
    super(new WeatherState());
  }

  addCity(info){
  this.dataService.getWeatherByCity(info).subscribe( res => {
    let cities = this.state.cities;
    cities.push({
      name: info.name,
      description: res.weather[0].description,
      temp: Math.round(res.main.temp),
      units: info.units === 'Metric' ? 'C' : 'F',
      icon: `http://openweathermap.org/img/w/${res.weather[0].icon}.png`
    })
  });
  }
}
