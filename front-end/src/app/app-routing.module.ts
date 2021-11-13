import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioScreenComponent } from './front-end/inicio/inicio-screen/inicio-screen.component';
import { CertificadosScreenComponent } from './front-end/certificados/certificados-screen/certificados-screen.component';
import { CursosScreenComponent } from './front-end/cursos/cursos-screen/cursos-screen.component';
import { BolsaScreenComponent } from './front-end/bolsa/bolsa-screen/bolsa-screen.component';

const routes: Routes = [
  { path: '', component: InicioScreenComponent },
  { path: 'certificados', component: CertificadosScreenComponent},
  { path: 'cursos', component: CursosScreenComponent},
  { path: 'bolsa', component: BolsaScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
