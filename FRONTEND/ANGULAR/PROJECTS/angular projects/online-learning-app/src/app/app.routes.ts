import { Routes } from '@angular/router';
import { ViewUser } from './user-service/view-user/view-user';
import { AddUser } from './user-service/add-user/add-user';
import { EditUser } from './user-service/edit-user/edit-user';

export const routes: Routes = [
    {path:'user', component:ViewUser},
    {path:'add-user', component:AddUser},
    {path:'edit-user',component:EditUser}
];
