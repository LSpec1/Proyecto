import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginEstate: boolean;

  constructor() {
    //si es false, siempre irá a la pagina de login
    this.loginEstate = true;
  }

  setLoginEstate(estate: boolean){
    console.log('set: '+estate);
    this.loginEstate = estate;
  }

  getLoginEstate (){
    console.log('get: '+this.loginEstate);
    return this.loginEstate;
  }
}