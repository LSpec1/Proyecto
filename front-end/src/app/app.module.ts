import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrarseScreenComponent } from './front-end/registrarse/registrarse-screen/registrarse-screen.component';
import { InicioScreenComponent } from './front-end/inicio/inicio-screen/inicio-screen.component';
import { LoginScreenComponent } from './front-end/login/login-screen/login-screen.component';
import { CursosScreenComponent } from './front-end/cursos/cursos-screen/cursos-screen.component';
import { CursoindividualScreenComponent } from './front-end/cursoindividual/cursoindividual-screen/cursoindividual-screen.component';
import { CertificadosScreenComponent } from './front-end/certificados/certificados-screen/certificados-screen.component';
import { BolsaScreenComponent } from './front-end/bolsa/bolsa-screen/bolsa-screen.component';
import { EmpleoScreenComponent } from './front-end/empleo/empleo-screen/empleo-screen.component';
import { CursosComponent } from './front-end/inicio/cursos/cursos.component';
import { OfertasComponent } from './front-end/inicio/ofertas/ofertas.component';
import { InfoComponent } from './front-end/inicio/info/info.component';
import { FormsModule } from '@angular/forms'; //permite [(ngModule)] para input html -> typescript
import { CursosDisponiblesComponent } from './front-end/cursos/cursos-disponibles/cursos-disponibles.component';

//servicios
import { LoginService } from './servicios/login.service';
import { FiltrosComponent } from './front-end/cursos/filtros/filtros.component';
import { CursosService } from './servicios/cursos.service';
import { FiltrosService } from './servicios/filtros.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrarseScreenComponent,
    InicioScreenComponent,
    LoginScreenComponent,
    CursosScreenComponent,
    CursoindividualScreenComponent,
    CertificadosScreenComponent,
    BolsaScreenComponent,
    EmpleoScreenComponent,
    CursosComponent,
    OfertasComponent,
    InfoComponent,
    FiltrosComponent,
    CursosDisponiblesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    LoginService,
    CursosService,
    FiltrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
