import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes;
  subscriptor: Subscription;

  constructor(private _sClientes:ClientesService) { }

  ngOnInit() {
    
  }

}
