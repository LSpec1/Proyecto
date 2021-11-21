import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-certificados-screen',
  templateUrl: './certificados-screen.component.html',
  styleUrls: ['./certificados-screen.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #C4C4C4;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
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
        descripcion: "4 Módulos"
      },{
        video: "https://www.youtube.com/embed/Cs5ymoNkrX8",
        titulo: "Curso de diseño",
        descripcion: "2 Módulos"
      },{
        video: "https://www.youtube.com/embed/Cs5ymoNkrX8",
        titulo: "Curso de programación web",
        descripcion: "2 Módulos"
      }

    ]


    constructor(private modalService: NgbModal) {}

    openBackDropCustomClass(content:any) {
      this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
    }
  
    openWindowCustomClass(content:any) {
      this.modalService.open(content, { windowClass: 'dark-modal' });
    }
  
    openSm(content:any) {
      this.modalService.open(content, { size: 'sm' });
    }
  
    openLg(content:any) {
      this.modalService.open(content, { size: 'lg' });
    }
  
    openXl(content:any) {
      this.modalService.open(content, { size: 'xl' });
    }
  
    openVerticallyCentered(content:any) {
      this.modalService.open(content, { centered: true });
    }
  
    openScrollableContent(longContent:any) {
      this.modalService.open(longContent, { scrollable: true });
    }
  
    openModalDialogCustomClass(content:any) {
      this.modalService.open(content, { modalDialogClass: 'dark-modal' });
    }

  ngOnInit(): void {
    
  }

}
