import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { empleos, empleo } from '../interfaces/bolsa';


@Injectable({
  providedIn: 'root'
})
export class BolsaService {

  private empleos = new Array<any>();

  HttpUploadOptions = {
    headers: new HttpHeaders(
      {
        'Access-Control-Allow-Origin': '*',
        'Acess-Control-Allow-Heades': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONES,DELETE,PUT',
        'Content-Type': 'application/json'
      }
    )
  }

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

  deleteEmpleo(id:any):Observable<any>{
    return this.http.delete(`${environment.hostname}/eliminarEmpleo/${id}`);
  }

  createEmpleo(empleo:any):Observable<any>{
    return this.http.post(`${environment.hostname}/crearEmpleo`,JSON.stringify(empleo),this.HttpUploadOptions);
  }
}
