import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginEstate: boolean;

  constructor() {
    this.loginEstate = false;
  }

  setLoginEstate(estate: boolean){
    let a = new AppComponent();

    //Al ejecutar esta funcion, se ejecuta la que se encuentra en app.component
    a.setLogin();
    this.loginEstate = estate;
  }

  getLoginEstate (){
    return this.loginEstate;
  }
}