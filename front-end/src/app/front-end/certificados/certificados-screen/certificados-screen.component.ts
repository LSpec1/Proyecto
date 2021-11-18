import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificados-screen',
  templateUrl: './certificados-screen.component.html',
  styleUrls: ['./certificados-screen.component.scss']
})
export class CertificadosScreenComponent implements OnInit {

    certificados: any[] = [
      {
        imagen: "certificado.png",
        titulo: "Curso de Programación",
        certificado: "certificadocurso.jpg",
      },
      {
        imagen: "certificado.png",
        titulo: "Curso de Diseño UI/UX",
        certificado: "certificadocurso.jpg",
      },
      {
        imagen: "certificado.png",
        titulo: "Curso de Diseño Gráfico",
        certificado: "certificadocurso.jpg",
      }

    ]

    otroscursos: any[] = [
      {
        video: "https://www.youtube.com/embed/L1oMLsiMusQ",
        titulo: "Curso de programación",
      },{
        video: "https://www.youtube.com/embed/Cs5ymoNkrX8",
        titulo: "Curso de diseño",
      },{
        video: "https://www.youtube.com/embed/Cs5ymoNkrX8",
        titulo: "Curso de programación web",
      }

    ]


  constructor() { }

  ngOnInit(): void {
    
  }

}
