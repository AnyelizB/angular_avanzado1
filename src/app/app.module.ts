import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// RUTAS
import { APP_ROUTES } from './app.routes';

// Modules
import { PagesModule } from './pages/pages.module';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgessComponent } from './pages/progess/progess.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';
// import { IncrementadorComponent } from './components/incrementador/incrementador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    // IncrementadorComponent,
    // NopagefoundComponent
    // DashboardComponent,
    // ProgessComponent,
    // Graficas1Component,
    // PagesComponent,
    // HeaderComponent,
    // BreadcrumsComponent,
    // SidebarComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
