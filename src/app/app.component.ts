import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; // ¡Importa el navbar aquí!

@Component({
  selector: 'app-root',
  standalone: true, // Esto indica que es un componente standalone
  imports: [RouterOutlet, NavbarComponent], // Y aquí lo agregas al array de imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'theordinary';
}