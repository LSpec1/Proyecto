import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  loginEstate:boolean;

  constructor(private _router: Router, private _loginService:LoginService) {
    this.loginEstate = false;
    _loginService.setLoginEstate(false);
  }

  onBack():void {
    this._router.navigate(['/inicio']);
  }

  ngOnInit(): void {
  }

  mandarEstate(estado:number){
    if (estado == 1) {
      this.loginEstate = true;
      this._loginService.setLoginEstate(true);
    } else {
      this._loginService.setLoginEstate(false);
    }

    var correologin="usuariocomun@correo.com";
    var clavelogin="usuariocomun"

    let correo:any=(<HTMLInputElement> document.getElementById("correo")).value;
    let clave:any=(<HTMLInputElement> document.getElementById("clave")).value;

    if(correo==correologin && clave == clavelogin){
      alert("Bienvenido a la plataforma!");
      this._router.navigate(['/inicio'])
    }
    else{
      alert("Porfavor verifique sus datos");


  }

  } 
}
