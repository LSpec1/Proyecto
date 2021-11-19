import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/servicios/cursos.service';
import { Video_Curso } from 'src/app/interfaces/video';

@Component({
  selector: 'app-cursoindividual-screen',
  templateUrl: './cursoindividual-screen.component.html',
  styleUrls: ['./cursoindividual-screen.component.scss']
})
export class CursoindividualScreenComponent implements OnInit {

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

  constructor(private _cursos: CursosService) {
    this.videos = _cursos.getListaVideos();
  }

  ngOnInit(): void {
    this.videoSeleccionado = this.videos[0];
    this.videosRelacionados.push(this.videos[1]);
    this.videosRelacionados.push(this.videos[2]);
    this.comentarios = this.agregarComentarios();
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