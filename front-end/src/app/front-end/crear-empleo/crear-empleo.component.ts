import { Component, OnInit } from '@angular/core';
import { BolsaService } from 'src/app/servicios/bolsa.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Country, State }  from 'country-state-city';
import { ICountry } from 'country-state-city/dist/lib/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-empleo',
  templateUrl: './crear-empleo.component.html',
  styleUrls: ['./crear-empleo.component.scss']
})
export class CrearEmpleoComponent implements OnInit {

  public paises:ICountry[];
  ciudades:any;
  codigoPaises: string[] = ["AR","BO","CL","CO","CR","CU","EC","PE","UY","VE"]
  formulario:FormGroup;
  nombreCiudad:string | undefined;

  constructor(private _bolsa:BolsaService, public FormB:FormBuilder, private router:Router) {
    this.formulario = this.FormB.group({
      titulo: ["",[Validators.required]],
      empresa: ["",[Validators.required]],
      pais: ["",[Validators.required]],
      ciudad: ["",[Validators.required]],
      descripcion: ["",[Validators.required]],
      contacto: ["",[Validators.required]],
      correo: ["",[Validators.required,Validators.email]],
      salario: ["",[Validators.required,Validators.pattern("[0-9]+")]],
      jornada: ["",[Validators.required]],
    })

    this.nombreCiudad = "";
    this.paises = [];
    this.codigoPaises.sort();
    for (let codigo of this.codigoPaises){
      this.paises.push(Country.getCountryByCode(codigo)!);
    }

  }

  ngOnInit(): void {}


  select(event:any){
    this.ciudades = State.getStatesOfCountry(event.value)

    this.nombreCiudad = Country.getCountryByCode(event.value)?.name
  }

  insertar():any{
    let datos:any = {
      "titulo": this.formulario.get("titulo")?.value,
      "empresa": this.formulario.get("empresa")?.value,
      "pais": this.formulario.get("pais")?.value,
      "ciudad": this.formulario.get("ciudad")?.value,
      "fecha": this.crearFecha(),
      "descripcion": this.formulario.get("descripcion")?.value,
      "contacto": this.formulario.get("contacto")?.value,
      "correo": this.formulario.get("correo")?.value,
      "salario": this.formulario.get("salario")?.value,
      "jornada": this.formulario.get("jornada")?.value
    }
    return datos;
  }

  crearFecha(){
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let fecha = `${year}/${month}/${day}`
    return fecha;
  }

  enviar(){
    let datos = this.insertar();
    datos["pais"] = this.nombreCiudad;
    this._bolsa.createEmpleo(datos).subscribe(data=>{
      alert(data.message);
      this.router.navigate(['/bolsa']).then(()=>{
        window.location.reload();
      })
    });
  }
}
