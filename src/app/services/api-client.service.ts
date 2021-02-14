import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {WEATHER_API, API_TOKEN} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {

  constructor(private httpClient: HttpClient) {
  }

  public getWeatherByCity({name, units}): Observable<any> {

    return this.httpClient
      .get<any>(`${WEATHER_API}weather?q=${name}&appid=${API_TOKEN}&units=${units}`)
  }
}
