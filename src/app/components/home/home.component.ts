import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { CityInfo } from 'src/app/models/city';
import {WeatherState, WeatherStore} from '../../services/app.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cities: CityInfo[];
  options: string[];
  constructor(
    private store: WeatherStore
  ) {
  }

  ngOnInit(): void {
    this.options = this.store.state.options;
    console.log(this.options)
    this.cities = this.store.state.cities;
  }

  addCity(info){
    if(this.cities.find(city => city.name === info.name)){
      return;
    } else {
    this.store.addCity(info);
    }
  }
}
