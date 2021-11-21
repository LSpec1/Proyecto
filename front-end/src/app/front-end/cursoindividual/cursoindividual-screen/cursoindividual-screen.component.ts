import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/servicios/cursos.service';
import { Video_Curso } from 'src/app/interfaces/video';
import { ActivatedRoute, Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

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
  videosCurso: Video_Curso[] = [];
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
    this.videoSeleccionado = this.obtenerVideoCurso(this.id_curso, 1);
    this.videosCurso = this.obtenerVideosCurso(this.id_curso);
    //Los videos relacionados al siguiente curso
    this.videosRelacionados.push(this.getRelacionado(this.id_curso));
    this.videosRelacionados.push(this.videos[2]);
    this.comentarios = this.agregarComentarios();
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    
  }

  siguienteVideo(id_video_curso:number, modulo:number) {
    //Actualizamos los datos
    this.videoSeleccionado = this.obtenerVideoCurso(id_video_curso, modulo);
    //Los videos relacionados al siguiente curso
    this.comentarios = this.agregarComentarios();
    console.log("Siguiente: id="+id_video_curso+", modulo="+modulo);
  }

  esUltimoVideo(video:Video_Curso, indice:number){
    const ultimoIndice = this.videosCurso.length;
    indice = indice+1;

    if (ultimoIndice == indice) {
      return true
    } else {
      return false;
    }
  }

  getRelacionado(id:number):Video_Curso {
    let result: Video_Curso;
    if (this.videos[this.id_curso+1]) { //si existe un curso siguiente
      result = this.videos[this.id_curso+1]
    } else { //si no, selecciona un video del mismo curso
      result = this.videos[this.id_curso];
    }
    return result;
  }

  obtenerVideoCurso(id:any, modulo:any):Video_Curso{
    
    for (let i = 0; i < this.videos.length; i++) {
      const element:Video_Curso = this.videos[i];
      if (element.id_video_curso == id && element.modulo == modulo) {
        return element;
      }
    }
    //caso contrario
    let aux:Video_Curso = { id_curso: -1,
                            curso: "",
                            id_video_curso: 0,
                            modulo: 0,
                            total: 0,
                            titulo: '',
                            link: '' };
    return aux;
  }

  obtenerVideosCurso(id_curso:any){
    let result:Video_Curso[] = [];

    //obtener todos los videos del curso
    for (let i = 0; i < this.videos.length; i++) {
      const element:Video_Curso = this.videos[i];
      if (element.id_curso == id_curso) {
        result.push(element);
      }
    }
    
    return result;
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