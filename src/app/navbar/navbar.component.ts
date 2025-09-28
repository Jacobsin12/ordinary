import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Importa el módulo de Font Awesome y los íconos que vas a usar
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faEye, faHeart, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FontAwesomeModule // Agrega FontAwesomeModule aquí para usar los iconos
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // Define las propiedades de los íconos para poder usarlos en el HTML
  faHome = faHome;
  faEye = faEye;
  faHeart = faHeart;
  faUser = faUser;
  faShoppingCart = faShoppingCart;
}