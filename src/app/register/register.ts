import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
  animations: [
    trigger('loginAnimation', [
      transition(':enter', [
        query('.login-container', [
          style({ opacity: 0, transform: 'scale(0.95)' }),
          animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
        ], { optional: true })
      ])
    ]),
    trigger('formFieldAnimation', [
      transition(':enter', [
        query('.form-group', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class Register {

   registerForm: FormGroup;
  isLoading = false;
  showPassword = false;
  selectedRole: string = 'patient';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^\+?[1-9]\d{1,14}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]],
      newsletter: [true]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordsMismatch: true });
      return { passwordsMismatch: true };
    }
    return null;
  }

  getPasswordStrength(): string {
    const password = this.registerForm.get('password')?.value;
    if (!password) return 'weak';
    
    if (password.length < 8) return 'weak';
    if (password.length < 12) return 'medium';
    return 'strong';
  }

  getPasswordStrengthText(): string {
    const strength = this.getPasswordStrength();
    switch (strength) {
      case 'weak': return 'Weak password';
      case 'medium': return 'Medium strength';
      case 'strong': return 'Strong password';
      default: return '';
    }
  }

  selectRole(role: string) {
    this.selectedRole = role;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      
      // Simuler un appel API
      setTimeout(() => {
        this.isLoading = false;
        // Rediriger vers la page de connexion après inscription réussie
        this.router.navigate(['/login']);
      }, 1500);
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

}
