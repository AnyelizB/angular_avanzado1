import { NgModule } from '@angular/core';

// Modulos
import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTES } from './pages.routes';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';


@NgModule ({
   declarations: [
       DashboardComponent,
       ProgessComponent,
       Graficas1Component,
       PagesComponent
   ],
   exports: [
        DashboardComponent,
        ProgessComponent,
        Graficas1Component
   ],
   imports: [
    SharedModule,
    PAGES_ROUTES
   ]
})

export class PagesModule { }