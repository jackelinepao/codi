import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthService implements CanActivate {

  constructor() { }
  canActivate(){
    if(localStorage.getItem('sesion')){
      return true
    }else {
      return true;
    }
  }
}
