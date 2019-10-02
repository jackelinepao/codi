import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  
  data = {
    miGenero: "",
    miCancion: ""
  }
  constructor() { }

  ngOnInit() {
  }
  imprimir(nombres, apellidos){
    console.log("click en el boton");
    console.log(`Nombres: ${nombres.value}`);
    console.log(`Apellidos: ${apellidos.value}`);
  }
  imprimir2(apodo, pregunta){
    console.log("click en el boton");
    console.log(`Apodo: ${apodo.value}`);
    console.log(`Pregunta: ${pregunta.value}`);
  }
  imprimir3(raza, edad){
    console.log(raza);
    console.log(edad);
  }
  imprimir4(formulario){
    console.log(formulario.value);
    console.log(this.data);
  }
}
