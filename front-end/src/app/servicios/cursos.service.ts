import { Injectable } from '@angular/core';
import { Video_Curso } from '../interfaces/video';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { HttpClient, HttpClientModule } from '@angular/common/http'; //importante para backend -> frontend

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  listaVideos: Video_Curso[] =
  [
    {
      id_curso: 1,
      curso:"Programación",
      id_video_curso:1,
      modulo: 1,
      total: 4,
      titulo:"Curso de programación en JS",
      link:"https://www.youtube.com/watch?v=AEiRa5xZaZw"
    },{
      id_curso: 1,
      curso:"Programación",
      id_video_curso: 2,
      modulo: 1,
      total: 4,
      titulo:"Curso de programación en JS",
      link:"https://www.youtube.com/watch?v=AEiRa5xZaZw"
    },{
      id_curso: 1,
      curso:"Programación",
      id_video_curso:3,
      modulo: 1,
      total: 4,
      titulo:"Curso de programación en JS",
      link:"https://www.youtube.com/watch?v=AEiRa5xZaZw"
    },{
      id_curso: 1,
      curso:"Programación",
      id_video_curso: 1,
      modulo: 2,
      total: 4,
      titulo:"Curso de programación en JS",
      link:"https://www.youtube.com/watch?v=AEiRa5xZaZw"
    },{
      id_curso: 1,
      curso:"Programación",
      id_video_curso: 2,
      modulo: 2,
      total: 4,
      titulo:"Curso de programación en JS",
      link:"https://www.youtube.com/watch?v=AEiRa5xZaZw"
    },{
      id_curso: 1,
      curso:"Programación",
      id_video_curso: 1,
      modulo: 3,
      total: 4,
      titulo:"Curso de programación en JS",
      link:"https://www.youtube.com/watch?v=AEiRa5xZaZw"
    },{
      id_curso: 2,
      curso:"Diseño",
      id_video_curso:1,
      modulo: 1,
      total: 3,
      titulo:"Curso de Diseño",
      link:'https://www.youtube.com/embed/4dKuDEWEAmo'
    },
    {
      id_curso: 3,
      curso:"Programación",
      id_video_curso:1,
      modulo: 1,
      total: 2,
      titulo:"Curso de Desarrollo de Videojuegos",
      link:'https://www.youtube.com/embed/4dKuDEWEAmo'
    },
    {
      id_curso: 4,
      curso:"Humanidades",
      id_video_curso:1,
      modulo: 1,
      total: 2,
      titulo:"Curso de Humanidades",
      link:'https://www.youtube.com/embed/4dKuDEWEAmo'
    },
    {
      id_curso: 4,
      curso:"Humanidades",
      id_video_curso:2,
      modulo: 1,
      total: 2,
      titulo:"Curso de Humanidades",
      link:'https://www.youtube.com/embed/4dKuDEWEAmo'
    },
    {
      id_curso: 4,
      curso:"Humanidades",
      id_video_curso:3,
      modulo: 1,
      total: 2,
      titulo:"Curso de Humanidades",
      link:'https://www.youtube.com/embed/4dKuDEWEAmo'
    },
    {
      id_curso: 2,
      curso:"Diseño",
      id_video_curso: 1,
      modulo: 2,
      total: 2,
      titulo:"Curso de Diseño",
      link:'https://www.youtube.com/embed/4dKuDEWEAmo'
    },
    {
      id_curso: 2,
      curso:"Diseño",
      id_video_curso:1,
      modulo: 2,
      total: 2,
      titulo:"Curso de Diseño",
      link:'https://www.youtube.com/embed/4dKuDEWEAmo'
    }
  ];

  constructor(private http:HttpClient) { }

  getVideos():Observable<any> {
    return this.http.get(`${environment.hostname}/videos`);
  }

  aux: any[] = [];
  mostrarLista(lista:any[]){
    this.aux = lista;
    console.log();
  }

  getListaVideos (){
    return this.listaVideos;
  }
}