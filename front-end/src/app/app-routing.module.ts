import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioScreenComponent } from './front-end/inicio/inicio-screen/inicio-screen.component';
import { CertificadosScreenComponent } from './front-end/certificados/certificados-screen/certificados-screen.component';
import { CursosScreenComponent } from './front-end/cursos/cursos-screen/cursos-screen.component';
import { BolsaScreenComponent } from './front-end/bolsa/bolsa-screen/bolsa-screen.component';
import { LoginScreenComponent } from './front-end/login/login-screen/login-screen.component';
import { RegistrarseScreenComponent } from './front-end/registrarse/registrarse-screen/registrarse-screen.component';
import { CursoindividualScreenComponent } from './front-end/cursoindividual/cursoindividual-screen/cursoindividual-screen.component';
<<<<<<< HEAD
import { SegundologinScreenComponent } from './front-end/segundologin-screen/segundologin-screen.component';
=======
import { EmpleoScreenComponent } from './front-end/empleo/empleo-screen/empleo-screen.component';
>>>>>>> c5b4f561652a5ab409d4b3ab28e429b3680a97ca

const routes: Routes = [
  { path: '', component: LoginScreenComponent},
  { path: 'inicio', component: InicioScreenComponent},
  { path: 'certificados', component: CertificadosScreenComponent},
  { path: 'cursos', component: CursosScreenComponent},
  { path: 'cursos/curso-individual', component: CursoindividualScreenComponent},
  { path: 'bolsa', component: BolsaScreenComponent},
  { path: 'login', component: LoginScreenComponent},
  { path: 'register', component: RegistrarseScreenComponent},
<<<<<<< HEAD
  { path: 'login2', component: SegundologinScreenComponent},
=======
  { path: 'empleo/:id', component: EmpleoScreenComponent},
  { path: 'empleo', component: EmpleoScreenComponent}
>>>>>>> c5b4f561652a5ab409d4b3ab28e429b3680a97ca
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
