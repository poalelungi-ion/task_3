import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from '../location.service';
import { WeatherService } from '../weather.service';
import { StyleService, StyleAdvice } from '../style.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather: Weather | undefined;
  styleAdvice: StyleAdvice | undefined;
  error: any;

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService,
    private styleService: StyleService
  ) { }

  ngOnInit(): void {
    this.locationService.getCurrentLocation().subscribe({
      next: (coords) => {
        console.log('[WeatherComponent] Got location:', coords);
        this.weatherService.getWeather(coords.latitude, coords.longitude).subscribe({
          next: (weatherData) => {
            console.log('[WeatherComponent] Got weather:', weatherData);
            this.weather = weatherData;

            this.styleService.getStyleAdvice(weatherData.current_weather).subscribe({
              next: (advice) => {
                this.styleAdvice = advice;
              },
              error: (err) => {
                console.error('Error getting style advice:', err);
                this.styleAdvice = undefined;
              }
            });
          },
          error: (error) => {
            console.error('Error getting weather:', error);
            this.error = error;
          }
        });
      },
      error: (error) => {
        console.error('Error getting location:', error);
        // Store the error so the UI can show it
        this.error = { message: error?.message ?? error };

        // Fallback: try fetching weather for a default location so users still see data
        const fallback = { latitude: 51.5074, longitude: -0.1278 }; // London
        console.log('[WeatherComponent] Using fallback coords:', fallback);
        this.weatherService.getWeather(fallback.latitude, fallback.longitude).subscribe({
          next: (weatherData) => {
            console.log('[WeatherComponent] Got fallback weather:', weatherData);
            this.weather = weatherData;
          },
          error: (err) => {
            console.error('Error getting fallback weather:', err);
          }
        });
      }
    });
  }

    getWeatherDescription(code: number | undefined): string {
      if (code === undefined) {
        return '';
      }
      // Basic mapping based on Open-Meteo weather codes
      const map: { [k: number]: string } = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Fog',
        48: 'Depositing rime fog',
        51: 'Light drizzle',
        53: 'Moderate drizzle',
        55: 'Dense drizzle',
        56: 'Light freezing drizzle',
        57: 'Dense freezing drizzle',
        61: 'Slight rain',
        63: 'Moderate rain',
        65: 'Heavy rain',
        66: 'Light freezing rain',
        67: 'Heavy freezing rain',
        71: 'Slight snow fall',
        73: 'Moderate snow fall',
        75: 'Heavy snow fall',
    80: 'Rain showers',
        81: 'Moderate rain showers',
        82: 'Violent rain showers',
        95: 'Thunderstorm',
        96: 'Thunderstorm with slight hail',
        99: 'Thunderstorm with heavy hail'
      };
  
      return map[code] ?? 'Unknown';
    }}
