import { Component, OnInit } from '@angular/core';
import { City, Country, State }  from 'country-state-city';
import { ICountry } from 'country-state-city/dist/lib/interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { state } from '@angular/animations';




@Component({
  selector: 'app-registrarse-screen',
  templateUrl: './registrarse-screen.component.html',
  styleUrls: ['./registrarse-screen.component.scss']
})
export class RegistrarseScreenComponent implements OnInit {

  public paises:ICountry[];

  ciudades:any;
  codigoPaises: string[] = ["AR","BO","CL","CO","CR","CU","EC","PE","UY","VE"]


  formulario:FormGroup;
  estado:boolean = false;




  constructor(public FormB:FormBuilder) {
    this.paises = [];
    this.codigoPaises.sort();
    for (let codigo of this.codigoPaises){
      this.paises.push(Country.getCountryByCode(codigo)!);
    }




    this.formulario = this.FormB.group({
        nombres: ["", [Validators.required, Validators.pattern("[^0-9]+")]],
        apellidos: ["",[Validators.required, Validators.pattern("[^0-9]+")]],
        email: ["",[Validators.required, Validators.email]],
        paises: ["",[Validators.required]],
        contraseña: ["", [Validators.required, Validators.minLength(6)]],
        ciudades: ["",[Validators.required]],
        documento: ["",[Validators.required]],
        telefono: ["",[Validators.required]],
        cv: [""]
    })


  }

  ngOnInit(): void {
  }


  select(event:any){
    this.ciudades = State.getStatesOfCountry(event.value)
  }


  validacion(){

    let datos:any=[{
      "nombres": this.formulario.get("nombres")?.value,
      "apellidos": this.formulario.get("apellidos")?.value,
      "email": this.formulario.get("email")?.value,
      "pais": this.formulario.get("paises")?.value,
      "contraseña": this.formulario.get("contraseña")?.value,
      "ciudad": this.formulario.get("ciudades")?.value,
      "documento": this.formulario.get("documento")?.value,
      "telefono": this.formulario.get("telefono")?.value,
      "cv": this.formulario.get("cv")?.value
    }];

    alert('Sus datos se han registrado correctamente');
    window.location.reload()

  }

}
