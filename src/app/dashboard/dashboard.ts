import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'doctor' | 'patient';
  avatar?: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard  implements OnInit {
  currentUser: User | null = null;
  activeTab: string = 'dashboard';

  constructor(private router: Router) {}

  ngOnInit() {
    // Simuler la récupération des données utilisateur depuis le service d'authentification
    this.loadUserData();
  }

  loadUserData() {
    // En pratique, vous récupéreriez ces données depuis votre service d'authentification
    const userRole = this.getUserRoleFromStorage();
    
    this.currentUser = {
      id: 1,
      name: this.getUserNameByRole(userRole),
      email: `${userRole}@hopital-excellence.fr`,
      role: userRole
    };
  }

  private getUserRoleFromStorage(): 'admin' | 'doctor' | 'patient' {
    // Simuler la récupération du rôle depuis le localStorage ou le service d'auth
    return (localStorage.getItem('userRole') as 'admin' | 'doctor' | 'patient') || 'patient';
  }

  private getUserNameByRole(role: string): string {
    const names = {
      admin: 'Dr. Admin Manager',
      doctor: 'Dr. Sophie Martin',
      patient: 'Marie Dupont'
    };
    return names[role as keyof typeof names] || 'Utilisateur';
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  getPageTitle(): string {
    const titles: { [key: string]: string } = {
      'dashboard': 'Tableau de bord',
      'users': 'Gestion des utilisateurs',
      'reports': 'Rapports & Statistiques',
      'settings': 'Paramètres système',
      'appointments': 'Mes rendez-vous',
      'patients': 'Mes patients',
      'schedule': 'Emploi du temps',
      'my-appointments': 'Mes rendez-vous',
      'medical-records': 'Dossiers médicaux',
      'prescriptions': 'Ordonnances',
      'profile': 'Mon profil',
      'messages': 'Messages',
      'help': 'Aide & Support'
    };
    return titles[this.activeTab] || 'Tableau de bord';
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  logout() {
    // Simuler la déconnexion
    localStorage.removeItem('userRole');
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

}
