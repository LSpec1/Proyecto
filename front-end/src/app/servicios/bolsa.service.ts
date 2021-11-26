import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { empleos, empleo } from '../interfaces/bolsa';


@Injectable({
  providedIn: 'root'
})
export class BolsaService {



  private empleos:Array<empleo> = empleos;

  constructor(private http:HttpClient) {
    //this.empleos = this.sortEmpleos(empleos);
  }

  getBolsa(): Observable<any>{
    return this.http.get(`${environment.hostname}/empleo`);
  }

  // getEmpleosSugeridos(id:any): Observable<any>{
  //   return this.http.get(`${environment.hostname}/empleo/${id}`);
  // }

  getEmpleosById(id:any): Observable<any>{
    return this.http.get(`${environment.hostname}/empleo/${id}`);
  }

  //getEmpleos(){
  //  return empleos;
  //}

  setEmpleos(empleos:Array<empleo>){
    this.empleos = empleos;
  }

  sortEmpleos(empleos:Array<empleo>){
    return this.empleos.sort((x,y) => +new Date(y.fecha) - +new Date(x.fecha));
  }

  reloadEmpleos(empleo:empleo):Array<empleo>{
    let aux = Object.create(empleos);
    let index = aux.indexOf(empleo);
    aux.splice(index,1);
    return aux;
  }
}
