import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  listaVideos: any[] =
  [
    {
      curso:"Programacion",
      modulo: 1,
      total: 4,
      titulo:"Curso de programacion en JS",
      link:"https://www.youtube.com/embed/AEiRa5xZaZw"
    },
    {
      curso:"Diseño",
      modulo: 1,
      total: 3,
      titulo:"Curso de Diseño",
      link:"https://www.youtube.com/embed/UzYgNZlKA4k"
    },
    {
      curso:"Programacion",
      modulo: 2,
      total: 2,
      titulo:"Curso de Desarrollo de Videojuegos",
      link:"https://www.youtube.com/embed/4dKuDEWEAmo"
    }
  ];

  constructor() { }

  getListaVideos (){
    return this.listaVideos;
  }
}
