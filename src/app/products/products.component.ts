import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LupaComponent } from '../Components/lupa/lupa.component';
import { NavbarComponent } from '../navbar/navbar.component';

interface Product {
  name: string;
  category: string;
  price: number;
  rating: number;
  inventoryStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
  image: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    DataViewModule,
    SelectButtonModule,
    TagModule,
    FormsModule,
    LupaComponent,
    NavbarComponent
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  layout: 'list' | 'grid' = 'grid';
  options = [];
  searchTerm: string = ''; // <- lo que recibimos desde Lupa

  allProducts: Product[] = [
    {
      name: 'The Ordinary Most Loved Set',
      category: 'Set de Cuidado Facial',
      price: 65,
      rating: 4.5,
      inventoryStatus: 'INSTOCK',
      image: 'https://theordinary.es/wp-content/uploads/2024/11/theordinary-Product-Most-Loved-Set-30ml.webp'
    },
    {
      name: 'Granactive Retinoid 5% in Squalane',
      category: 'Tratamiento Facial',
      price: 72,
      rating: 4.7,
      inventoryStatus: 'LOWSTOCK',
      image: 'https://www.theordinarys.com.mx/wp-content/uploads/the-ordinary-squalane/rdn-granactive-retinoid-5pct-in-squalane-30ml-433x433.png'
    },
    {
      name: 'The Ordinary Best Sellers Set',
      category: 'Set de Cuidado Facial',
      price: 79,
      rating: 4.8,
      inventoryStatus: 'INSTOCK',
      image: 'https://media.allure.com/photos/672e5fd7f734207dea1f0b2f/1:1/w_2000,h_2000,c_limit/best%20the%20ordinary%20products%20112024%20Lede.jpg'
    }
  ];

  // Se filtran los productos con base en searchTerm
  products(): Product[] {
    if (!this.searchTerm.trim()) return this.allProducts;

    const term = this.searchTerm.toLowerCase();
    return this.allProducts.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term)
    );
  }

  // Define el color del Tag según inventario
  getSeverity(product: Product): string {
    switch (product.inventoryStatus) {
      case 'INSTOCK': return 'success';
      case 'LOWSTOCK': return 'warning';
      case 'OUTOFSTOCK': return 'danger';
      default: return 'info';
    }
  }
}
