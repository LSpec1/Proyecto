import { Injectable } from '@angular/core';
import { empleos, empleo } from '../interfaces/bolsa';


@Injectable({
  providedIn: 'root'
})
export class BolsaService {

  private empleos:Array<empleo> = empleos;

  constructor() {
    this.empleos = this.sortEmpleos(empleos);
  }

  getEmpleos(){
    return empleos;
  }

  setEmpleos(empleos:Array<empleo>){
    this.empleos = empleos;
  }

  sortEmpleos(empleos:Array<empleo>){
    return this.empleos.sort((x,y) => +new Date(y.fecha) - +new Date(x.fecha));
  }

}
