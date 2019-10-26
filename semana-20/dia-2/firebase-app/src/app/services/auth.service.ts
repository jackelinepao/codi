import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _sHttp:HttpClient) { }
  crearUsuario(email, password){
      let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBgnyi-BKhoAOOfTv_zKYT_5p1LnCWGnss';
      let data = {
        email: email,
        password: password,
        returnSecureToken: true
      }
      let misHeaders = new HttpHeaders().set("Content-type", "application/json")
      return this._sHttp.post(url, JSON.stringify(data), {headers: misHeaders})
  }
  iniciarSesion(email, password){
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBgnyi-BKhoAOOfTv_zKYT_5p1LnCWGnss';

    let data = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    let misHeaders = new HttpHeaders().set("Content-type", "application/json")
    return this._sHttp.post(url, JSON.stringify(data), {headers: misHeaders})
}

}
