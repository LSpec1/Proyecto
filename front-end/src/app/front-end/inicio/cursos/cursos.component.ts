import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cartas: any[] = [
    {
      video: "https://www.youtube.com/embed/L1oMLsiMusQ",
      titulo: "Curso de programación",
      texto: "Módulo 2: Clase 5"
    },{
      video: "https://www.youtube.com/embed/Cs5ymoNkrX8",
      titulo: "Curso de diseño",
      texto: "Módulo 1: Clase 1"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
