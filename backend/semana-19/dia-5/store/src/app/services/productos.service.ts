import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private _sHttp: HttpClient) { }

  getProductos() : Observable<any>{
    return this._sHttp.get("https://5d93ed36e020b300147db151.mockapi.io/productos");
  }
}
