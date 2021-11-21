import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/servicios/cursos.service';
import { Video_Curso } from 'src/app/interfaces/video';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursoindividual-screen',
  templateUrl: './cursoindividual-screen.component.html',
  styleUrls: ['./cursoindividual-screen.component.scss'],
  inputs: ['id_curso']
})

export class CursoindividualScreenComponent implements OnInit {

  //Parametros recibidos
  id_curso: any;

  videos: Video_Curso[] = [];
  videoSeleccionado: Video_Curso = {  id_curso: 0,
                                      curso: "",
                                      id_video_curso: 0,
                                      modulo: 0,
                                      total: 0,
                                      titulo: '',
                                      link: '' };
  videosRelacionados:Video_Curso[] = [];
  comentarios: any[] = [];

  constructor(private _cursos: CursosService, private router: Router, private route: ActivatedRoute) {
    this.videos = _cursos.getListaVideos();
    this.id_curso = this.route.snapshot.queryParams['id']; //parametro
    //console.log("curso: "+this.id_curso);
  }

  ngOnInit(): void {
    this.videoSeleccionado = this.obtenerVideoCurso(this.id_curso);
    console.log(this.videoSeleccionado);
    this.videosRelacionados.push(this.videos[1]);
    this.videosRelacionados.push(this.videos[2]);
    this.comentarios = this.agregarComentarios();
  }

  ngOnDestroy() {
    
  }

  obtenerVideoCurso(id_curso:any):Video_Curso{
    for (let i = 0; i < this.videos.length; i++) {
      const element:Video_Curso = this.videos[i];
      if (element.id_curso == id_curso && element.id_video_curso == 1) {
        return element;
      }
    }

    let aux:Video_Curso = { id_curso: -1,
                            curso: "",
                            id_video_curso: 0,
                            modulo: 0,
                            total: 0,
                            titulo: '',
                            link: '' };

    return aux;
  }

  agregarComentarios():any[]{
    let comentarios: any[] = [
      { 
        persona: 'Andrés Rodriguez',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '+
                    'Donec tempor tellus id mi dapibus, eu lobortis arcu luctus.'+
                    'Vivamus gravida diam massa, rutrum gravida nunc laoreet eget. Nullam maximus sem eget pellentesque condimentum.'+
                    'In magna leo, aliquam eget nunc eget, vestibulum tincidunt tellus.'
      },{
        persona: 'Juliana Rivera',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor tellus id mi dapibus, eu lobortis arcu luctus.'
      },{
        persona: 'Juan Camilo Gomez',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor tellus id mi dapibus, eu lobortis arcu luctus.'
      }
    ];
    return comentarios;
  }
}