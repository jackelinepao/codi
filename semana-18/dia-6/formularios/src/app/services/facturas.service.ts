import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {
  constructor(private _sHttp: HttpClient) { }

  getFacturas(): Observable<any> {
    return this._sHttp.get("https://5d93ed36e020b300147db151.mockapi.io/facturas")
  }
} 
