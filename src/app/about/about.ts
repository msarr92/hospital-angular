import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
  animations: [
    trigger('counterAnimation', [
      transition(':enter', [
        query('.counter-item', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger('100ms', [
            animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('progressAnimation', [
      transition(':enter', [
        query('.progress-bar', [
          style({ width: '0%' }),
          animate('2000ms ease-out', style({ width: '*' }))
        ], { optional: true })
      ])
    ])
  ]
})
export class About {

  stats = [
    { value: 150, suffix: '+', label: 'Médecins experts' },
    { value: 300, suffix: '+', label: 'Lits disponibles' },
    { value: 25, suffix: '+', label: 'Spécialités médicales' },
    { value: 98, suffix: '%', label: 'Satisfaction patients' }
  ];

  skills = [
    { name: 'Soins d\'urgence', percentage: 95 },
    { name: 'Chirurgie', percentage: 90 },
    { name: 'Diagnostic', percentage: 92 },
    { name: 'Traitement', percentage: 94 }
  ];

}
