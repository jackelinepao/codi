import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  subscripcion: Subscription
  productos;
  constructor(private _sProducto:ProductosService) { }

  ngOnInit() {
    this.subscripcion = this._sProducto.getProductos().subscribe(
      (datos) => {
        this.productos = datos;
    });
  }
  ngOnDestroy() {
    this.subscripcion.unsubscribe();
  }
}
