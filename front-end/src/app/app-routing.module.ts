import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioScreenComponent } from './front-end/inicio/inicio-screen/inicio-screen.component';
import { CertificadosScreenComponent } from './front-end/certificados/certificados-screen/certificados-screen.component';
import { CursosScreenComponent } from './front-end/cursos/cursos-screen/cursos-screen.component';
import { BolsaScreenComponent } from './front-end/bolsa/bolsa-screen/bolsa-screen.component';
import { LoginScreenComponent } from './front-end/login/login-screen/login-screen.component';
import { RegistrarseScreenComponent } from './front-end/registrarse/registrarse-screen/registrarse-screen.component';
import { CursoindividualScreenComponent } from './front-end/cursoindividual/cursoindividual-screen/cursoindividual-screen.component';
import { EmpleoScreenComponent } from './front-end/empleo/empleo-screen/empleo-screen.component';
import { SegundologinScreenComponent } from './front-end/segundologin-screen/segundologin-screen.component';
import { CursonuevoScreenComponent } from './front-end/cursonuevo-screen/cursonuevo-screen.component';
import { CrearEmpleoComponent } from './front-end/crear-empleo/crear-empleo.component';
import { BolsaEmpleadorComponent } from './front-end/bolsa-empleador/bolsa-empleador.component';
const routes: Routes = [
  { path: '', component: LoginScreenComponent},
  { path: 'inicio', component: InicioScreenComponent},
  { path: 'certificados', component: CertificadosScreenComponent},
  { path: 'cursos', component: CursosScreenComponent},
  { path: 'cursos', component: CursoindividualScreenComponent, children: [{ path: 'curso-individual/:id_curso', component: CursoindividualScreenComponent}]},
  { path: 'bolsa', component: BolsaScreenComponent},
  { path: 'register', component: RegistrarseScreenComponent},
  { path: 'empleo/:id', component: EmpleoScreenComponent},
  { path: 'empleo', component: EmpleoScreenComponent},
  { path: 'login2', component: SegundologinScreenComponent},
  { path: 'login', component: LoginScreenComponent},
  {path: 'cursonuevo', component: CursonuevoScreenComponent},
  {path: 'registrate', component:RegistrarseScreenComponent},
  { path: 'crearEmpleo', component: CrearEmpleoComponent},
  { path: 'bolsaEmpleador',component: BolsaEmpleadorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
