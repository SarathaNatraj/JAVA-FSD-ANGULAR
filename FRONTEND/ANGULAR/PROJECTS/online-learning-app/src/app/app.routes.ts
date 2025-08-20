import { Routes } from '@angular/router';
import { ViewUser } from './user-service/view-user/view-user';
import { AddUser } from './user-service/add-user/add-user';
import { EditUser } from './user-service/edit-user/edit-user';
import { Menu } from './menu/menu/menu';

export const routes: Routes = [
    {path:'',component:Menu},
    {path:'user', component:ViewUser},
    {path:'add-user', component:AddUser},
    {path:'edit-user',component:EditUser}
];
