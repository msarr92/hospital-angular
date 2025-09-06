import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-login',
   imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
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
export class Login {

   loginForm: FormGroup;
  isLoading = false;
  showPassword = false;
  selectedRole: string = 'admin';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      
      // Simuler un appel API
      setTimeout(() => {
        this.isLoading = false;
        // Rediriger vers la page d'accueil après connexion réussie
        this.router.navigate(['/']);
      }, 1500);
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToRegister() {
    console.log('Redirection vers la page d\'inscription');
    // this.router.navigate(['/register']);
  }

  navigateToForgotPassword() {
    console.log('Redirection vers la page de mot de passe oublié');
    // this.router.navigate(['/forgot-password']);
  }



}
