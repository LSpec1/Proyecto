import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { Router, RouterLink } from '@angular/router';
import { BolsaScreenComponent } from '../bolsa/bolsa-screen/bolsa-screen.component';

@Component({
  selector: 'app-segundologin-screen',
  templateUrl: './segundologin-screen.component.html',
  styleUrls: ['./segundologin-screen.component.scss']
})
export class SegundologinScreenComponent implements OnInit {

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

    //usuario empresa
    var correologinempresa="empresa@correo.com";
    var claveempresa="empresa"

    //usuarioprofesional
    var correologinprofesional="profesional@correo.com";
    var claveprofesional="profesional"


    let correo:any=(<HTMLInputElement> document.getElementById("correo")).value;
    let clave:any=(<HTMLInputElement> document.getElementById("clave")).value;

    let correoprofesional:any=(<HTMLInputElement> document.getElementById("correo")).value;
    let claveprof:any=(<HTMLInputElement> document.getElementById("clave")).value;

    if((correo==correologinempresa && clave == claveempresa) || (correoprofesional==correologinprofesional && claveprof == claveprofesional)){
      alert("Bienvenido a la plataforma!");
      this._router.navigate(['/bolsaEmpleador'])
    }
    else{
      alert("Porfavor verifique sus datos");
    }
  }
}
function or(arg0: boolean) {
  throw new Error('Function not implemented.');
}

