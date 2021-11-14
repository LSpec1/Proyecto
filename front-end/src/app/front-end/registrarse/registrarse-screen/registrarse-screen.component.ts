import { Component, OnInit } from '@angular/core';
import { Country, State }  from 'country-state-city';
import { ICountry } from 'country-state-city/dist/lib/interface';



@Component({
  selector: 'app-registrarse-screen',
  templateUrl: './registrarse-screen.component.html',
  styleUrls: ['./registrarse-screen.component.scss']
})
export class RegistrarseScreenComponent implements OnInit {

  public paises:ICountry[];
  ciudades:any;
  codigoPaises: string[] = ["AR","BO","CL","CO","CR","CU","EC","PE","UY","VE"]





  constructor() {
    this.paises = [];
    this.codigoPaises.sort();
    for (let codigo of this.codigoPaises){
      this.paises.push(Country.getCountryByCode(codigo)!);
    }
  }

  ngOnInit(): void {
  }

  select(event:any){
    this.ciudades = State.getStatesOfCountry(event.value)
    console.log(this.ciudades)
  }

}
