import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Observable, from, forkJoin} from 'rxjs';
import { URL_BACKEND } from './../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class FacturasService {
  arregloRespuestas: Array<any> = [];

  constructor(private _sHttp: HttpClient) { }

  getFacturas(): Observable<any> {
    return this._sHttp.get(`${URL_BACKEND}/facturas`)
  }
  postFactura(objFactura): Observable<any> {

    let objFacturaString = JSON.stringify(objFactura);
    // creando headers
    let misHeaders = new HttpHeaders().set("Content-Type", "application/json");

    return this._sHttp.post(`${URL_BACKEND}/facturas`,
                              objFacturaString,
                              { headers: misHeaders });
  }
  deleteFactura(id): Observable<any>{
    return this._sHttp.delete(`${URL_BACKEND}/facturas/${id}`)
  }
  getDacturaId(id):Observable<any>{
    return this._sHttp.get(`${URL_BACKEND}/facturas/${id}`)
  }
  putFactura(objFactura, id): Observable<any> {

    let objFacturaString = JSON.stringify(objFactura);
    // creando headers
    let misHeaders = new HttpHeaders().set("Content-Type", "application/json");

    return this._sHttp.put(`${URL_BACKEND}/facturas/${id}`,
                              objFacturaString,
                              { headers: misHeaders });
  }
  deleteFacturas(arregloFacturas): Observable<any> {
    arregloFacturas.forEach(factura => {
      const respuesta = this._sHttp.delete(`${URL_BACKEND}/facturas/${factura.id}`) 
      this.arregloRespuestas.push(respuesta);
    });
    return forkJoin(this.arregloRespuestas);
  }
} 
