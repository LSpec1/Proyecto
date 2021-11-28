import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { empleos, empleo } from '../interfaces/bolsa';


@Injectable({
  providedIn: 'root'
})
export class BolsaService {


  private empleos = new Array<any>();

  constructor(private http:HttpClient) {
  }

  setEmpleos(bolsa:any){
    this.empleos = bolsa;
  }

  getEmpleos():any{
    return this.empleos;
  }

  getBolsa(): Observable<any>{
    return this.http.get(`${environment.hostname}/empleo`);
  }

  getEmpleosById(id:any): Observable<any>{
    return this.http.get(`${environment.hostname}/empleo/${id}`);
  }

  getEmpleoSugeridos(id:any): Observable<any>{
    return this.http.get(`${environment.hostname}/empleo/sugeridos/${id}`);
  }
}
