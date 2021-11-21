import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioScreenComponent } from './front-end/inicio/inicio-screen/inicio-screen.component';
import { CertificadosScreenComponent } from './front-end/certificados/certificados-screen/certificados-screen.component';
import { CursosScreenComponent } from './front-end/cursos/cursos-screen/cursos-screen.component';
import { BolsaScreenComponent } from './front-end/bolsa/bolsa-screen/bolsa-screen.component';
import { LoginScreenComponent } from './front-end/login/login-screen/login-screen.component';
import { RegistrarseScreenComponent } from './front-end/registrarse/registrarse-screen/registrarse-screen.component';
import {CursonuevoScreenComponent } from './front-end/cursonuevo-screen/cursonuevo-screen.component';
const routes: Routes = [
  { path: '', component: LoginScreenComponent},
  { path: 'inicio', component: InicioScreenComponent},
  { path: 'certificados', component: CertificadosScreenComponent},
  { path: 'cursos', component: CursosScreenComponent},
  { path: 'bolsa', component: BolsaScreenComponent},
  { path: 'login', component: LoginScreenComponent},
  { path: 'register', component: RegistrarseScreenComponent},
  { path: 'cursonuevo', component: CursonuevoScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
