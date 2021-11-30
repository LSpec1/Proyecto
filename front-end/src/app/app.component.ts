/*
 * Las variables de servicio traen un "_" en su nombre
 *
*/

import { Component } from '@angular/core';
import { LoginService } from './servicios/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto';
  loginEstate:boolean;

  constructor(private _loginService: LoginService) {
    this.loginEstate = _loginService.getLoginEstate();
    setInterval(()=> {
      this.loginEstate = _loginService.getLoginEstate();
    },1 * 1000);
  }

  // Ejecutar esta funcion para obtener el estado de login en el servicio LoginService
  public setLogin(){
    this.loginEstate = this._loginService.getLoginEstate();
  }
}
