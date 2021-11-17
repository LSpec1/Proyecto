import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/servicios/cursos.service';
import { Video_Curso } from 'src/app/interfaces/video';

@Component({
  selector: 'app-cursos-screen',
  templateUrl: './cursos-screen.component.html',
  styleUrls: ['./cursos-screen.component.scss']
})
export class CursosScreenComponent implements OnInit {

  //Variable que almacena lo obtenido en el servicio cursos
  listaCursos: any[] = [];

  //Variables de filtros
  filtroTematica: any[] = [];
  filtroDuraciones: any = 0;
  filtroBuscar:any = '';

  //Variable que determina cual carta se ve o no
  isInvisible = false;

  //Variables que almacenana los checkboxes
  tematicasCheckbox = [
    {id: 1, nombre: "Programación", select: false},
    {id: 2, nombre: "Diseño", select: false},
    {id: 3, nombre: "Humanidades", select: false}
  ];

  duracionesCheckbox = [
    {id: 1, modulos: 2, select: false},
    {id: 2, modulos: 3, select: false},
    {id: 3, modulos: 4, select: false}
  ];

  constructor(private _cursos:CursosService) {
    this.listaCursos = _cursos.getListaVideos();
  }

  ngOnInit(): void {
    
  }

  /* Se envia al servicio de filtros dos arrays y un string */
  buscar(){
    const campo:any = document.getElementById("campoBuscar");
    //obtenemos todos los filtros que tengan la varible select en true
    this.filtroTematica = this.getTematicas();
    this.filtroDuraciones = this.getDuraciones();
    this.filtroBuscar = campo.value;  
    //console.log(this.filtros);
    console.log("Filtros seleccionados: ", this.filtroTematica, this.filtroDuraciones, this.filtroBuscar);
  }

  getTematicas(){
    let aux:any[] = [];
      for (let i = 0; i < this.tematicasCheckbox.length; i++) {
        const element = this.tematicasCheckbox[i];
        if (element.select) {
          aux.push(element)
        }
      }
    //console.log("hola", aux);
    return aux;
  }

  getDuraciones(){
      let aux:any[] = [];
      for (let i = 0; i < this.duracionesCheckbox.length; i++) {
        const element = this.duracionesCheckbox[i];
        if (element.select) {
          aux.push(element)
        }
      }
      //console.log("hola", aux);
      return aux;
  }

  filtrar() {
    this.revelarTodo();
    
    //Las banderas nos ayudaran a saber cuando hay que revelar todo
    let flag1:boolean = true;
    let flag2:boolean = true;
    let flag3:boolean = true;

    //Recorrer array de tematicas
    if (this.filtroTematica.length > 0) {
      
      flag1 = false;
      for (let i = 0; i < this.filtroTematica.length; i++) {

        //Obtenemos la tematica seleccionada
        const tematica:string = this.filtroTematica[i].nombre;

        //obtenemos todas las cartas
        let item:any = document.getElementsByClassName('card');
        
        for (let j = 0; j < item.length; j++) {
          const itemTematica = document.getElementsByClassName('tematica')[j].innerHTML;
          console.log(document.getElementsByClassName('tematica')[0].innerHTML.includes(tematica));
           
          if (!itemTematica.includes(tematica)) {
            this.ocultar(item[j]);
          } else {
            this.mostrar(item[j])
          }
        }
      }
    }

    //Recorrer array de duraciones
    if (this.filtroDuraciones.length > 0) {
      flag2 = false;
      for (let i = 0; i < this.filtroDuraciones.length; i++) {
        const duracion:any = this.filtroDuraciones[i].modulos;

        //obtenemos todas las cartas
        let item:any = document.getElementsByClassName('card');
        
        for (let j = 0; j < item.length; j++) {
          //obtenemos el string donde se ubica el valor
          let valor:string = document.getElementsByClassName('carta-texto')[j].innerHTML;
          //Si no se encuentra el numero dentro del string, se oculta
          if (!valor.includes(duracion)) {
            this.ocultar(item[j]);
          } else {
            this.mostrar(item[j])
          }
        }
      }
    }

    //Si todas las banderas siguien activadas, revelar todo
    if (flag1 && flag2 && flag3) {
      this.revelarTodo();
    }
    //los elementos están pero invisibles
    return true;
  }
  
  ocultar(element:HTMLElement){
    element.style.visibility = 'hidden';
    element.style.display = 'none';
  }
  mostrar(element:HTMLElement){
    element.style.visibility = 'visible';
    element.style.display = 'flex';
  }

  revelarTodo(){
    let item:any = document.getElementsByClassName('card');
    for (let j = 0; j < item.length; j++) {
      let item:any = document.getElementsByClassName('card');
      this.mostrar(item[j])
    }
  }

  /*
  onChange(){
    console.log(this.tematicasCheckbox);
    console.log(this.duracionesCheckbox);
  }
  */
}
