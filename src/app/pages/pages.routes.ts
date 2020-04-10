import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';


const pagesRoutes: Routes = [
    { path: '',
    component: PagesComponent, 
    children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'progress', component: ProgessComponent},
        {path: 'graficas1', component: Graficas1Component},
        {path: '', redirectTo:'/dashboard', pathMatch:'full'}// cualquier ruta vacia me va a direccionar al dashboard
    ]}
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes)