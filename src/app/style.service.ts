import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CurrentWeather } from './weather';

export interface StyleAdvice {
  mood: string;
  style: string;
  colors: string[];
}

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() { }

  /**
   * Get style advice based on local rules (hash mapping).
   */
  getStyleAdvice(weather: CurrentWeather): Observable<StyleAdvice> {
    return of(this.getLocalAdvice(weather));
  }

  /** Local fallback logic so the app still works without a backend/API key. */
  private getLocalAdvice(weather: CurrentWeather): StyleAdvice {
    const temperature = weather.temperature;
    const weatherCode = weather.weathercode;
    const windSpeed = weather.windspeed;

    // A simple hash map/rule-based system for "what to wear"
    if (temperature > 25 && weatherCode < 10) { // Hot and clear
      return {
        mood: 'Sunny and warm',
        style: 'Light and airy. Think linen shirts, shorts, and sandals. Don\'t forget sunscreen!',
        colors: ['White', 'Beige', 'Light Blue']
      };
    } else if (temperature > 15 && weatherCode < 10) { // Mild and clear
      return {
        mood: 'Pleasant and mild',
        style: 'A light jacket or sweater would be perfect. Pair it with jeans or chinos. Enjoy the fresh air!',
        colors: ['Green', 'Khaki', 'Navy']
      };
    } else if (temperature > 5 && weatherCode < 10) { // Cool and clear
      return {
        mood: 'Cool and crisp',
        style: 'Layer up with a warm sweater and a light coat. Jeans and comfortable shoes are recommended.',
        colors: ['Brown', 'Grey', 'Dark Blue']
      };
    } else if (temperature <= 5 && weatherCode < 10) { // Cold and clear
      return {
        mood: 'Chilly but clear',
        style: 'Time to bundle up! A heavy coat, scarf, hat, and gloves are a must. Thermal layers recommended.',
        colors: ['Burgundy', 'Mustard', 'Black']
      };
    } else if (weatherCode >= 51 && weatherCode <= 65) { // Rain
      return {
        mood: 'Rainy',
        style: 'Grab your waterproof jacket and umbrella! Rubber boots are a good idea. Stay dry!',
        colors: ['Navy', 'Dark Grey', 'Yellow']
      };
    } else if (weatherCode >= 71 && weatherCode <= 75) { // Snow
      return {
        mood: 'Snowy',
        style: 'Heavy winter coat, waterproof boots, gloves, and a warm hat are essential. Embrace the winter wonderland!',
        colors: ['White', 'Light Blue', 'Silver']
      };
    } else if (windSpeed > 30) { // Windy
      return {
        mood: 'Windy',
        style: 'Wear wind-resistant layers. A snug jacket and perhaps a scarf to protect your neck. Avoid loose clothing.',
        colors: ['Grey', 'Black', 'Dark Green']
      };
    } else { // Default / catch-all
      return {
        mood: 'Variable weather',
        style: 'Dress in layers so you can adjust. A versatile jacket will be your best friend today.',
        colors: ['Neutral', 'Blue', 'Green']
      };
    }
  }
}
