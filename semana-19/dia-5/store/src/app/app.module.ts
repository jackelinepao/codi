import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListadoComponent } from './components/listado/listado.component';
import { MonedasPipe } from './pipes/monedas.pipe';
import { CambiarMonedaComponent } from './components/cambiar-moneda/cambiar-moneda.component';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { CarritoComponent } from './components/carrito/carrito.component';
import { MISRUTAS } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListadoComponent,
    MonedasPipe,
    CambiarMonedaComponent,
    FirstLetterPipe,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MISRUTAS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
