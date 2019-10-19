import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Subscription } from 'rxjs';
import { CarritoComponent } from '../carrito/carrito.component';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  subscripcion: Subscription
  productos: any;
  subsCarrito: Subscription;
  miCarrito: any;
  constructor(private _sProducto:ProductosService,
    private _sCarrito: CarritoService) { }

  ngOnInit() {
    this.subscripcion = this._sProducto.getProductos().subscribe(
      (datos) => {
        this.productos = datos;
    });
    this.subsCarrito = this._sCarrito.carritoActual.subscribe(datosProductos=>{
      this.miCarrito = datosProductos;
    });
  }

  anadirProducto(producto: any){
    this.miCarrito.push(producto);
    this._sCarrito.modificarCarrito(this.miCarrito);
    console.log(this.miCarrito);
  }
  ngOnDestroy() {
    this.subscripcion.unsubscribe();
  }
}
