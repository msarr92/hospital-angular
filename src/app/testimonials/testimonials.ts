import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-testimonials',
   imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
   animations: [
    trigger('testimonialAnimation', [
      transition(':enter', [
        query('.testimonial-card', [
          style({ opacity: 0, transform: 'translateY(30px) scale(0.95)' }),
          stagger('200ms', [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('quoteAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8) rotate(-5deg)' }),
        animate('800ms 300ms ease-out', style({ opacity: 1, transform: 'scale(1) rotate(0)' }))
      ])
    ])
  ]
})
export class Testimonials {

   testimonials = [
    {
      name: 'Marie Dupont',
      role: 'Patient en chirurgie cardiaque',
      text: 'L\'équipe médicale a été exceptionnelle pendant mon opération. Le suivi post-opératoire était impeccable et je me sens aujourd\'hui en pleine forme. Merci pour votre professionnalisme et votre humanité.',
      avatar: 'avatar1',
      rating: 5,
      date: '15 Janvier 2024'
    },
    {
      name: 'Pierre Martin',
      role: 'Patient aux urgences',
      text: 'J\'ai été admis aux urgences pour une fracture du bras. La prise en charge a été rapide et efficace. Le personnel était à l\'écoute et rassurant. Je recommande vivement cet hôpital.',
      avatar: 'avatar2',
      rating: 4,
      date: '22 Février 2024'
    },
    {
      name: 'Sophie Leroy',
      role: 'Accompagnante',
      text: 'Mon père a été hospitalisé pendant 3 semaines. L\'équipe soignante était attentionnée et compétente. Les installations sont modernes et propres. Une expérience positive dans un moment difficile.',
      avatar: 'avatar3',
      rating: 5,
      date: '5 Mars 2024'
    },
    {
      name: 'Thomas Bernard',
      role: 'Patient en pédiatrie',
      text: 'Mon fils de 5 ans a été admis en pédiatrie. Les médecins et infirmières ont été formidables avec lui. L\'environnement est adapté aux enfants et cela a beaucoup facilité son séjour.',
      avatar: 'avatar4',
      rating: 5,
      date: '18 Mars 2024'
    },
    {
      name: 'Catherine Moreau',
      role: 'Patient en consultation',
      text: 'J\'ai consulté plusieurs spécialistes dans cet hôpital. Les délais de rendez-vous étaient raisonnables et les médecins très compétents. Une organisation impeccable.',
      avatar: 'avatar5',
      rating: 4,
      date: '2 Avril 2024'
    },
    {
      name: 'Jean Petit',
      role: 'Patient en imagerie médicale',
      text: 'J\'ai passé un IRM et un scanner. Le matériel est moderne et le personnel technique très rassurant. Les résultats ont été expliqués clairement par le radiologue.',
      avatar: 'avatar6',
      rating: 5,
      date: '12 Avril 2024'
    }
  ];

  currentTestimonial = 0;
  
  // Pour la navigation entre témoignages
  nextTestimonial() {
    this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
  }
  
  prevTestimonial() {
    this.currentTestimonial = (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
  }
  
  // Générer les étoiles de notation
  getStars(rating: number): number[] {
    return Array(rating).fill(0).map((_, i) => i);
  }
  

}
