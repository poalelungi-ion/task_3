import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly API_URL = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) { }

  getWeather(latitude: number, longitude: number): Observable<Weather> {
    const url = `${this.API_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    return this.http.get<Weather>(url);
  }
}
