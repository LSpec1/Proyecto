import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-cursonuevo-screen',
  templateUrl: './cursonuevo-screen.component.html',
  styleUrls: ['./cursonuevo-screen.component.scss']
})
export class CursonuevoScreenComponent implements OnInit {
  cartas: any[] = [
    {
      video: "https://www.youtube.com/watch?v=HJpEdlzzNSY",
      titulo: "Módulo 1: Clase 1: Introducción a la Programación Web",
      texto: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",
      texto1: "euismod tincidunt ut laoreet dolore magna aliquan erat volutpat.",
      texto2:"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis",
      texto3:"nisl ut aliquip ex ea commodo"
    },{
      video: "https://www.youtube.com/watch?v=HJpEdlzzNSY",
      titulo: "Módulo 1: Clase 2: Aspectos Generales",
      texto: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",
      texto1: "euismod tincidunt ut laoreet dolore magna aliquan erat volutpat.",
      texto2:"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis",
      texto3:"nisl ut aliquip ex ea commodo"
    },{
      video: "https://www.youtube.com/watch?v=HJpEdlzzNSY",
      titulo: "Módulo 1: Clase 1: Fundamentos de HTML y CSS",
      texto: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",
      texto1: "euismod tincidunt ut laoreet dolore magna aliquan erat volutpat.",
      texto2:"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis",
      texto3:"nisl ut aliquip ex ea commodo"
    }
  ]
  
  constructor(private router:Router) { 
  }
  
  ngOnInit(): void {
  }
  //Al seleccionar un curso, se redirige a curso individual
  cursoSeleccionado(id_curso:number) {
    this.router.navigate(['/cursos/curso-individual', id_curso], { queryParams: {'id': id_curso}});
  }


}
