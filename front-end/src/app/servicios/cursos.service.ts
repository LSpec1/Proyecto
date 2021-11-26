import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'; //importante para backend -> frontend
import { Video_Curso } from '../interfaces/video';

@Injectable({
  providedIn: 'root'
})
export class CursosService{

  listaVideos = new Array<Video_Curso>();

  constructor (private app:HttpClient) {
    
  }

  getListaVideos(): Observable<any> {
    return this.app.get(`${environment.hostname}/videos`);
  }
}