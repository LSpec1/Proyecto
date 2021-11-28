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
  _loginService = new LoginService();

  constructor() {
    this.loginEstate = this._loginService.getLoginEstate();
  }

  // Ejecutar esta funcion para obtener el estado de login en el servicio LoginService
  public setLogin(){
    this.loginEstate = this._loginService.getLoginEstate();
  }
}
