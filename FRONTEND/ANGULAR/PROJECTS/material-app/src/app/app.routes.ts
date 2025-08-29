import { Routes } from '@angular/router';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { Menu } from './components/menu/menu';
import { ProductForm } from './components/product-form/product-form';

export const routes: Routes = [
    {path:'',component:Menu},
    {path:'register', component:Register},
    {path:'login', component:Login},
    {path:'product',component:ProductForm}
];
