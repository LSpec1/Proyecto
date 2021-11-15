import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  listaVideos: any[] =
  [
    {
      curso:"Programacion",
      id: 1,
      modulo: 1,
      total: 4,
      titulo:"Curso de programacion en JS",
      link:"https://www.youtube.com/embed/AEiRa5xZaZw"
    },
    {
      curso:"Diseño",
      id: 1,
      modulo: 1,
      total: 3,
      titulo:"Curso de Diseño",
      link:"https://www.youtube.com/embed/UzYgNZlKA4k"
    },
    {
      curso:"Programacion",
      id: 1,
      modulo: 1,
      total: 2,
      titulo:"Curso de Desarrollo de Videojuegos",
      link:"https://www.youtube.com/embed/4dKuDEWEAmo"
    },
    {
      curso:"Humanidades",
      id: 1,
      modulo: 1,
      total: 2,
      titulo:"Curso de Humanidades",
      link:"https://www.youtube.com/embed/4dKuDEWEAmo"
    },
    {
      curso:"Humanidades",
      id: 2,
      modulo: 1,
      total: 2,
      titulo:"Curso de Humanidades",
      link:"https://www.youtube.com/embed/4dKuDEWEAmo"
    },
    {
      curso:"Humanidades",
      id: 3,
      modulo: 1,
      total: 2,
      titulo:"Curso de Humanidades",
      link:"https://www.youtube.com/embed/4dKuDEWEAmo"
    },
    {
      
      curso:"Diseño",
      id: 1,
      modulo: 2,
      total: 3,
      titulo:"Curso de Diseño",
      link:"https://www.youtube.com/embed/UzYgNZlKA4k"
    },
    {
      
      curso:"Diseño",
      id: 1,
      modulo: 3,
      total: 3,
      titulo:"Curso de Diseño",
      link:"https://www.youtube.com/embed/UzYgNZlKA4k"
    }
  ];

  constructor() { }

  getListaVideos (){
    return this.listaVideos;
  }
}
