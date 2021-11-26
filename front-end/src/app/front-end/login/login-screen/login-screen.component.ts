import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
import { InicioScreenComponent } from '../../inicio/inicio-screen/inicio-screen.component';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  _loginService = new LoginService;
  loginEstate:boolean = false;

  constructor(private _router: Router) { }

  onBack():void {
    this._router.navigate(['/inicio']);
  }

  ngOnInit(): void {
  }

  mandarEstate(estado:number){
    if (estado == 1) {
      this._loginService.setLoginEstate(true);
    } else {
      this._loginService.setLoginEstate(false);
    }
    console.log(this._loginService.getLoginEstate());

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
