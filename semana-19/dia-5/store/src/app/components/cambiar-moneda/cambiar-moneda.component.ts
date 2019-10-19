import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambiar-moneda',
  templateUrl: './cambiar-moneda.component.html',
  styleUrls: ['./cambiar-moneda.component.css']
})
export class CambiarMonedaComponent implements OnInit {
  monto: number = 0;
  texto: string = 'azucena';
  constructor() { }

  ngOnInit() {
  }

}
