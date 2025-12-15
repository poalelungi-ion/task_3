import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

/**
 * @class LoginComponent
 * @description T03_08: This component displays a login form and uses Reactive Forms for validation.
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  /**
   * @property loginForm
   * @description The FormGroup for the login form.
   */
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(false)
  });

  /**
   * @constructor
   * @param {AuthService} authService - The service that handles authentication.
   * @param {Router} router - The router to navigate to other pages.
   */
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * @method onSubmit
   * @description Handles the form submission.
   */
  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username ?? '';
      const password = this.loginForm.value.password ?? '';
      if (this.authService.login(username, password)) {
        if (this.loginForm.value.rememberMe) {
          localStorage.setItem('username', username);
        } else {
          localStorage.removeItem('username');
        }
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid username or password');
      }
    }
  }
}
