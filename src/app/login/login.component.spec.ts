import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a login form', () => {
    expect(component.loginForm).toBeDefined();
  });

  it('should have a username and password control', () => {
    expect(component.loginForm.contains('username')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('should make the username and password controls required', () => {
    const usernameControl = component.loginForm.get('username');
    const passwordControl = component.loginForm.get('password');
    usernameControl?.setValue('');
    passwordControl?.setValue('');
    expect(usernameControl?.valid).toBeFalsy();
    expect(passwordControl?.valid).toBeFalsy();
  });

  it('should be valid when username and password are provided', () => {
    const usernameControl = component.loginForm.get('username');
    const passwordControl = component.loginForm.get('password');
    usernameControl?.setValue('test');
    passwordControl?.setValue('test');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should call the onSubmit method', () => {
    spyOn(component, 'onSubmit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
