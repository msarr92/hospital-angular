import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-service',
  imports: [CommonModule],
  templateUrl: './service.html',
  styleUrl: './service.css',
  animations: [
    trigger('serviceAnimation', [
      transition(':enter', [
        query('.service-card', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger('150ms', [
            animate('800ms ease-out', 
              keyframes([
                style({ opacity: 0, transform: 'translateY(50px)', offset: 0 }),
                style({ opacity: 0.5, transform: 'translateY(15px)', offset: 0.3 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
              ])
            )
          ])
        ], { optional: true })
      ])
    ]),
    trigger('iconAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0) rotate(-180deg)' }),
        animate('800ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
          style({ transform: 'scale(1) rotate(0)' }))
      ])
    ])
  ]
})
export class Service {

  services = [
    { 
      title: 'Urgences 24/7', 
      description: 'Service d\'urgence disponible à toute heure avec une équipe médicale expérimentée et des équipements de pointe.', 
      icon: 'fas fa-ambulance',
      features: ['Prise en charge immédiate', 'Équipe dédiée', 'Plateau technique complet']
    },
    { 
      title: 'Chirurgie', 
      description: 'Bloc opératoire de pointe avec des technologies avancées pour des interventions sûres et précises.', 
      icon: 'fas fa-stethoscope',
      features: ['Salles high-tech', 'Chirurgiens experts', 'Suivi post-opératoire']
    },
    { 
      title: 'Consultations', 
      description: 'Spécialistes de renom pour un diagnostic précis et un traitement personnalisé de chaque patient.', 
      icon: 'fas fa-user-md',
      features: ['Spécialités multiples', 'Diagnostic avancé', 'Plannings flexibles']
    },
    { 
      title: 'Imagerie Médicale', 
      description: 'Technologies d\'imagerie avancées pour un diagnostic précis et non invasif.', 
      icon: 'fas fa-x-ray',
      features: ['IRM 3Tesla', 'Scanner 128 barrettes', 'Échographie Doppler']
    },
    { 
      title: 'Cardiologie', 
      description: 'Unité de cardiologie interventionnelle avec monitoring cardiaque continu et soins spécialisés.', 
      icon: 'fas fa-heartbeat',
      features: ['Échocardiographie', 'Holter ECG', 'Rééducation cardiaque']
    },
    { 
      title: 'Pédiatrie', 
      description: 'Environnement adapté aux enfants avec une équipe spécialisée en médecine infantile.', 
      icon: 'fas fa-baby',
      features: ['Urgences pédiatriques', 'Chambres parent-enfant', 'Espace jeu']
    }
  ];

  hoveredCard: number | null = null;

  onCardHover(index: number) {
    this.hoveredCard = index;
  }

  onCardLeave() {
    this.hoveredCard = null;
  }

}
