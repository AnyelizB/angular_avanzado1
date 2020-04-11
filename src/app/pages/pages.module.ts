import { NgModule } from '@angular/core';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms'; // para importar el ngModule 

//Rutas
import { PAGES_ROUTES } from './pages.routes';

// ng2-chart
import { ChartsModule } from 'ng2-charts';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

// Temporal
import {IncrementadorComponent} from '../components/incrementador/incrementador.component';

@NgModule ({
   declarations: [
       DashboardComponent,
       ProgessComponent,
       Graficas1Component,
       PagesComponent,
       IncrementadorComponent,
       GraficoDonaComponent
   ],
   exports: [
        DashboardComponent,
        ProgessComponent,
        Graficas1Component
   ],
   imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
   ]
})

export class PagesModule { }