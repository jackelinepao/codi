import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { RUTAS } from './app.routes';
import { CrearFacturaComponent } from './components/crear-factura/crear-factura.component';
import { VerFacturaComponent } from './components/ver-factura/ver-factura.component'
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FacturasComponent,
    HomeComponent,
    ErrorComponent,
    CrearFacturaComponent,
    VerFacturaComponent
  ],
  imports: [
    BrowserModule,
    RUTAS,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
