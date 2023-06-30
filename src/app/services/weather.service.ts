import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }
  getWeather(loc: string): Observable<any> {
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=f7ffc2750eeb4ccc822194041232806&q=${loc}&aqi=no`;

    return this.http.get(apiUrl);
  }
}
