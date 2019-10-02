import { Component, OnInit } from '@angular/core';
import { Producto } from './../../clases/producto'

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  button: string = 'button relleno-interno';
  buttonArray:Array<string> =['button', 'relleno-interno']
  error:boolean = false;
  productos:Array<Producto> = [
    {
      id: 1,
      nombre: 'TVs',
      cantidad: 100
    },
    {
      id: 2,
      nombre: 'Microndas',
      cantidad: 50
    },
    {
      id:3,
      nombre: 'Ollas',
      cantidad: 10
    }
  ];
  // cambiarError(){
  //   if (condition) {
      
  //   }
  // }
  constructor() { }

  ngOnInit() {
  }

}
