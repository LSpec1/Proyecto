import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  filtros:any[] = [];

  setFiltros(a:any[], b:any[], c:string){
    this.filtros.push(a);
    this.filtros.push(b);
    this.filtros.push(c);
    //console.log(a,b,c);
  }
  getFiltros(){
    return this.filtros;
  }
}
