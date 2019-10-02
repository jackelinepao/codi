import { Component, OnInit, Input,OnChanges,SimpleChanges, OnDestroy, AfterContentInit, AfterContentChecked, ɵConsole, AfterViewInit, AfterViewChecked} from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{

  @Input()
  usuario:Usuario;
  myObservable: any;
  constructor(private _observable:ObservableService) {
    this.myObservable = this._observable;
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('datosPrevios',changes.usuario.previousValue)
    console.log('datoActual',changes.usuario.currentValue)
    const nuevoValor = changes.usuario.currentValue;
    if(undefined !== nuevoValor){
      this.usuario.nombres = this.usuario.nombres + "Administrador";
    }
    
  }
  suscripcion:any;
  ngOnInit() {
  this.suscripcion = this.myObservable.contador.subscribe(data =>{
      console.log(data)
    })
  }
  ngAfterContentInit(){
    console.log("Ejecutando AfterContentInit, despues que angular muestre el contenido");
  }
  ngAfterContentChecked(){
    console.log("Ejecutando AfterChecked, despues que angular compruebe el contenido proyectado, por ejemplo para obtener atributos como @ViewChild")
  }
  ngAfterViewInit(){
    console.log("Ejecutando AfterViewInit, despues de inicializar las vistas de componente")
  }
  ngAfterViewChecked(){
    console.log("Ejecutando AfterViewChecked, despues de inicializar las vistas de componente")
  }
  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

}