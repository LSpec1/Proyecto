import { Component, OnInit } from '@angular/core';

import { CertificadosScreenComponent } from 'src/app/front-end/certificados/certificados-screen/certificados-screen.component';
import { BolsaScreenComponent } from 'src/app/front-end/bolsa/bolsa-screen/bolsa-screen.component';
import { CursosScreenComponent } from 'src/app/front-end/cursos/cursos-screen/cursos-screen.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  routes = [
    { path: 'inicio', component: CertificadosScreenComponent},
    { path: 'cursos', component: BolsaScreenComponent},
    { path: 'bolsas', component: CursosScreenComponent}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
