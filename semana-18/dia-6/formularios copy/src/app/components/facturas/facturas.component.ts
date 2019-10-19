import { Component, OnInit } from '@angular/core';
import { FacturasService } from './../../services/facturas.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  facturas;
  factura;
  subscriptor: Subscription;
  objFactura = {
    id: '',
    fact_nro: '',
	  fact_ruc: '',
	  fact_rz: '',
	  fact_fech: ''
  }
  facturasSeleccionadas:Array<any> = [];

  constructor(private _sFacturas: FacturasService, private _sRouter: Router) { }

  ngOnInit() {
    this.traerFacturas()
  }

  traerFacturas(){
    this.subscriptor = this._sFacturas.getFacturas().subscribe((resultado)=>{
      this.facturas = resultado;
    })
  }
  ngOnDestroy() {
    this.subscriptor.unsubscribe();
  }

  crearFactura(){
    this._sRouter.navigate(['facturas', 'crear'])
  }
  borrarFactura(id){
    Swal.fire({
      title: '¿ Desea eliminar está factura ?',
      text: 'Esta seguro de eliminar, porque no hay forma de recuperar la factura',
      type: 'warning',
      confirmButtonText: 'Si, borrar!',
      showCancelButton: true,
      cancelButtonText: 'No, cancelar!',
    }).then((result) => {
      if(result.value){
        this._sFacturas.deleteFactura(id).subscribe((rpta)=>{
          if(rpta.id){
            Swal.fire({
              position: 'center',
              type: 'success',
              title: 'La factura ha sido borrada con éxito',
              showConfirmButton: false,
              timer: 1500
            });
            this.traerFacturas()
          }
        })
      }
    })
  }
  abrirModalEditar(id){
    console.time("delay")
    Swal.fire({
      type: 'info',
      html: `<h2 class="display-6">Espere un momento<h2><i class="fa fa-spinner fa-lg fa-spin mt-3 mb-3"></i><h6 class="display-8">Esperando al servidor ...</h6>`
    })
    this.subscriptor = this._sFacturas.getDacturaId(id).subscribe((resultado)=>{
      console.timeEnd("delay")
      Swal.close();
      if(resultado.id){
        this.objFactura = resultado;
        $('#modalEditar').modal('show');
      }
    });
  }
  guardarFacturaEditada(id){
    this.subscriptor = this._sFacturas.putFactura(this.objFactura, id).subscribe((rpta)=>{
      if(rpta.id){
        // Swal.fire({
        //   title: 'Éxito!',
        //   text: "La factura ha sido creada con éxito",
        //   type: 'success',
        //   showCancelButton: true,
        // })
        this.traerFacturas();
        $('#modalEditar').modal('hide')
      }
    });
  }
  seleccionarFactura(evento, factura){
    if(evento.target.checked){
      this.facturasSeleccionadas.push(factura);
      console.log(this.facturasSeleccionadas);
    }else{
      for (let i = 0; i < this.facturasSeleccionadas.length; i++) {
        if(factura.id === this.facturasSeleccionadas[i].id){
          this.facturasSeleccionadas.splice(i, 1);
          console.log(this.facturasSeleccionadas)
        }
        
      }
    }
  }
  eliminarFacturas(){
    Swal.fire({
      title: '¿ Desea eliminar las factura seleccionadas?',
      text: 'Esta seguro de eliminar, porque no hay forma de recuperar la factura',
      type: 'warning',
      confirmButtonText: 'Si, borrar!',
      showCancelButton: true,
      cancelButtonText: 'No, cancelar!',
    }).then((result) => {
      if(result.value){
        this._sFacturas.deleteFacturas(this.facturasSeleccionadas).subscribe((rpta)=>{
          if(rpta[0].id){
            Swal.fire({
              position: 'center',
              type: 'success',
              title: 'La facturas han sido borradas con éxito',
              showConfirmButton: false,
              timer: 1500
            });
            this.facturasSeleccionadas = [];
            this.traerFacturas()
          }
          console.log(rpta);
        })
      }
    })
  }
}
