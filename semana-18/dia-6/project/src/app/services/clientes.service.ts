import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { URL_BACKEND } from './../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private _sHttp:HttpClient) { }

  getClientes(): Observable<any> {
    return this._sHttp.get(`${URL_BACKEND}/clients`)
  }
  postCliente(ObjCliente): Observable<any> {
    let ObjClienteString = JSON.stringify(ObjCliente);
    let myheaders = new HttpHeaders().set("Content-Type", "application/json");
    return this._sHttp.post(`${URL_BACKEND}/clients`, ObjClienteString,{headers: myheaders})
  }
  deleteCliente(id):Observable<any>{
    return this._sHttp.delete(`${URL_BACKEND}/clients/${id}`)
  }
  getClienteId(id):Observable<any>{
    return this._sHttp.get(`${URL_BACKEND}/clients/${id}`)
  }
  putCliente(ObjCliente, id): Observable<any> {
    let ObjClienteString = JSON.stringify(ObjCliente);
    let myheaders = new HttpHeaders().set("Content-Type", "application/json");
    return this._sHttp.put(`${URL_BACKEND}/clients/${id}`, ObjClienteString,{headers: myheaders})
  }

}
