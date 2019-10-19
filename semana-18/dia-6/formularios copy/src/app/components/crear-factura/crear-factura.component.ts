import { Component, OnInit, OnDestroy } from '@angular/core';
import { FacturasService } from 'src/app/services/facturas.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit, OnDestroy {

  objFactura = {
    fact_nro: '',
	  fact_ruc: '',
	  fact_rz: '',
	  fact_fech: ''
  }
  subscriptor: Subscription;

  constructor(private _sFactura:FacturasService, private _sRouter: Router) { }

 
  ngOnInit() {
  }
  crearFactura(){
    Swal.fire({
      title: 'Espere un momento',
      text: 'Estamos registrando la factura',
      type: 'info',
      allowOutsideClick: false,
      showConfirmButton: false
    })
    this.subscriptor = this._sFactura.postFactura(this.objFactura).subscribe((rpta)=>{
      if(rpta.id){
        Swal.fire({
          title: 'Éxito!',
          text: "La factura ha sido creada con éxito",
          type: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ir a Facturas'
        }).then((result) => {
          if (result.value) {
            this._sRouter.navigate(['facturas'])
          }
        })
      }
    });
  }
  ngOnDestroy(){
    try {
      this.subscriptor.unsubscribe();
    } catch (error) {
      
    }
  }
}
