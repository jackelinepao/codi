import { Component, OnInit } from '@angular/core';
import { Producto } from './../../clases/producto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  titulo:string = 'Agregar Productos';
  producto: Producto = {
    id: 1,
    nombre: 'Pizza',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit aliquid saepe iusto amet nisi, molestias assumenda eveniet, tenetur ea minus enim beatae reprehenderit sequi aliquam! Maxime itaque velit quo voluptate.'
  }
  arrayProductos:Array<Producto> = [
    {id:1, nombre: 'Pizza', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
    {id:2, nombre: 'Pizza 1', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
    {id:3, nombre: 'Pizza 2', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
    {id:4, nombre: 'Pizza 3', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'},
    {id:4, nombre: 'Pizza 4', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'}
  ];

  productoSeleccionado: Producto;
  seleccionarProducto(producto: Producto):void{
    this.productoSeleccionado = producto;
  }

  miFuncion():void {
    this.arrayProductos.push(this.producto);
    console.log(this.arrayProductos)
  }
  constructor() { }

  ngOnInit() {
  }

}
