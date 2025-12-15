import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor() {
    // Check if the user is already logged in from localStorage.
    this.loggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  login(username: string, password: string):boolean {
    // In a real application, you would have a more complex authentication system.
    // For this demo, we will use a simple check.
    if (username === 'user' && password === 'password') {
      this.loggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
