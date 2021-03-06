import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgessComponent } from './pages/progess/progess.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';


const appRoutes: Routes = [
    // {path: '',
    // component: PagesComponent, 
    // children: [
    //     {path: 'dashboard', component: DashboardComponent},
    //     {path: 'progress', component: ProgessComponent},
    //     {path: 'graficas1', component: Graficas1Component},
    //     {path: '', redirectTo:'/dashboard', pathMatch:'full'}// cualquier ruta vacia me va a direccionar al dashboard
    // ]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component:NopagefoundComponent} // cualquier ruta que no este en estos componentes
]

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});