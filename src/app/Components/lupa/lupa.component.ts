import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';

@Component({
  selector: 'app-lupa',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, IconFieldModule],
  templateUrl: './lupa.component.html',
  styleUrls: ['./lupa.component.scss']
})
export class LupaComponent {
  searchTerm: string = ''; // <- texto de búsqueda

  // Para comunicar el valor al padre (products)
  onSearchChange(event: any) {
    this.searchTerm = event.target.value;
    const searchEvent = new CustomEvent('searchChange', { detail: this.searchTerm });
    window.dispatchEvent(searchEvent);
  }
}
