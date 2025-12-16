import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getCurrentLocation(): Observable<GeolocationCoordinates> {
    return new Observable((observer) => {
      if ('geolocation' in navigator) {
        // Set a timeout so the observable fails fast if the user doesn't respond to the permission prompt
        const timeout = window.setTimeout(() => {
          observer.error('Timeout getting location (user did not respond or permission prompt blocked).');
        }, 5000);

        navigator.geolocation.getCurrentPosition(
          (position) => {
            clearTimeout(timeout);
            observer.next(position.coords);
            observer.complete();
          },
          (error) => {
            clearTimeout(timeout);
            observer.error(error);
          }
        );
      } else {
        observer.error('Geolocation is not available in this browser.');
      }
    });
  }
}
