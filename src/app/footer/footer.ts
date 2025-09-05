import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
   animations: [
    trigger('footerAnimation', [
      transition(':enter', [
        query('.footer-section, .social-link, .footer-bottom', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class Footer {

   currentYear = new Date().getFullYear();
  
  quickLinks = [
   
    { name: 'À propos', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Témoignages', link: '#testimonials' },
    { name: 'Contact', link: '#contact' }
  ];
  
  services = [
    { name: 'Urgences', link: '#services' },
    { name: 'Chirurgie', link: '#services' },
    { name: 'Consultations', link: '#services' },
    { name: 'Imagerie Médicale', link: '#services' },
    { name: 'Cardiologie', link: '#services' }
  ];
  
  socialLinks = [
    { icon: 'fab fa-facebook-f', link: '#' },
    { icon: 'fab fa-twitter', link: '#' },
    { icon: 'fab fa-instagram', link: '#' },
    { icon: 'fab fa-linkedin-in', link: '#' },
    { icon: 'fab fa-youtube', link: '#' }
  ];

}
