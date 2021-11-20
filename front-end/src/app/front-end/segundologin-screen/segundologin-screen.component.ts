import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-segundologin-screen',
  templateUrl: './segundologin-screen.component.html',
  styleUrls: ['./segundologin-screen.component.scss']
})
export class SegundologinScreenComponent implements OnInit {

  _loginService = new LoginService;
  loginEstate:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mandarEstate(estado:number){
    if (estado == 1) {
      this._loginService.setLoginEstate(true);
    } else {
      this._loginService.setLoginEstate(false);
    }
    console.log(this._loginService.getLoginEstate());
  }

}
