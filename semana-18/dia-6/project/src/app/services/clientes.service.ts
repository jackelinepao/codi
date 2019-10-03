import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private _sHttp:HttpClient) { }

  getClientes(): Observable<any> {
    return this._sHttp.get("https://5d93ed36e020b300147db151.mockapi.io/clientes")
  }
}
