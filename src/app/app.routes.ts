import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ExploreComponent } from './explore/explore.component';
import { ProductsComponent } from './products/products.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'explore', component: ExploreComponent},
    // Rutas temporales para evitar errores de navegación.
    { path: 'products', component: ProductsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent }
];