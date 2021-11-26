
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

  listaVideos = new Array<Video_Curso>();
  videosCurso = new Array<Video_Curso>();
  videoSeleccionado: Video_Curso;
  videosRelacionados= new Array<Video_Curso>();
  comentarios = new Array;

  constructor(private cursosService: CursosService, private router: Router, private route: ActivatedRoute) {
    this.videoSeleccionado = {  id_curso: 0,
                                curso: "",
                                id_video_curso: 0,
                                modulo: 0,
                                total: 0,
                                titulo: '',
                                link: '' };
  }

  ngOnInit(): void {
    this.listaVideos = this.cursosService.listaVideos;
    this.id_curso = this.route.snapshot.queryParams['id']; //parametro
    console.log("curso id: "+this.id_curso);
    this.videosCurso = this.obtenerVideosCurso(this.id_curso);
    this.videoSeleccionado = this.videosCurso[0];
    console.log('Video Seleccionado: '+this.videoSeleccionado);
    //Los videos relacionados al siguiente curso
    this.videosRelacionados.push(this.getRelacionado(this.id_curso));
    this.videosRelacionados.push(this.getRelacionado(this.id_curso + 1));
    this.comentarios = this.agregarComentarios();
  }

  ngOnDestroy() { }

  /**
   * La funcion recibe los datos del video actual y cambia el video seleccionado por el siguiente
   * @param id_curso - id del curso actual
   * @param modulo - numero del modulo del video actual
   * @param id_video - id del video actual
   */
  siguienteVideo(id_curso:number, modulo:number, id_video: number) {
    //Actualizamos los datos
    this.videoSeleccionado = this.obtenerVideoCurso(id_curso, modulo, id_video);
    //Los videos relacionados al siguiente curso
    this.comentarios = this.agregarComentarios();
    console.log("Siguiente = id:"+id_video+", modulo: "+modulo, "video: "+id_video);
  }

  /**
   * Retorna verdadero si es el ultimo video de la lista o 'false' caso contrario
   * @param video - input de tipo Video_Curso
   * @param indice - id de la posicion del video dentro de la lista de videos
   * @returns boolean
   */
  esUltimoVideo(video:Video_Curso, indice:number): boolean{
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
    if (this.listaVideos[this.id_curso+1]) { //si existe un curso siguiente
      result = this.listaVideos[this.id_curso+1]
    } else { //si no, selecciona un video del mismo curso
      result = this.listaVideos[this.id_curso];
    }
    return result;
  }

  /**
   * Retorna un elemento especifico dentro de la lista de cursos
   * @param id_curso - id del curso
   * @param modulo  - numero del modulo
   * @param id_video - id del video dentro del modulo
   * @returns Objeto de tipo Video_Curso
   */
  obtenerVideoCurso(id_curso:number, modulo:number, id_video:number):Video_Curso{
    for (let i = 0; i < this.videosCurso.length; i++) {
      const element:Video_Curso = this.videosCurso[i];
      if ((element.id_video_curso == id_curso) && (element.modulo == modulo) && (element.id_video_curso == id_video)){
        return element;
      }
    }
    //caso de no ser encontrado
    let aux:Video_Curso = { id_curso: -1,
                            curso: "... Error de solicitud, por favor vuelva a seleccionar un curso.",
                            id_video_curso: 0,
                            modulo: 0,
                            total: 0,
                            titulo: '',
                            link: '' };
    return aux;
  }

  /**
   * Obtiene todos los videos del curso
   * @param id_curso 
   * @returns Arreglo de Video_Curso
   */
  obtenerVideosCurso(id_curso:any): Array<Video_Curso>{
    let result = new Array<Video_Curso>();
    for (let i = 0; i < this.listaVideos.length; i++) {
      const element:Video_Curso = this.listaVideos[i];
      if (element.id_curso == id_curso) {
        result.push(element);
      }
    }
    
    return result;
  }

  cursoSeleccionado(id_curso:number) {
    this.router.navigate(['/cursos/curso-individual', id_curso], { queryParams: {'id': id_curso}}).then(()=>{
      window.location.reload();
    });
  }

  agregarComentarios(): Array<any>{
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