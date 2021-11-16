/*
 * Para el traspaso del dato nombre o modulos desde el checkbox seleccionado
 * se hizo uso de [(ngModul)] y la libreria FormsModule agregada en app.module.ts
 */

import { Component, OnInit } from '@angular/core';
import { FiltrosService } from 'src/app/servicios/filtros.service';


@Component({
  selector: 'app-cursos-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  tematicasCheckbox = [
    {id: 1,nombre: "Programacion", select: false},
    {id: 2,nombre: "Diseño", select: false},
    {id: 3,nombre: "Humanidades", select: false}
  ];

  duracionesCheckbox = [
    {id: 1,modulos: 2, select: false},
    {id: 2,modulos: 3, select: false},
    {id: 3,modulos: 4, select: false}
]

  constructor(private _filtros:FiltrosService) {
    
  }

  ngOnInit(): void {
  }

  buscar(){
    const campo:any = document.getElementById("campoBuscar");
    //obtenemos todos los filtros que tengan la varible select en true
    const filtro1:any[] = this.getTematicas();
    const filtro2:any[] = this.getDuraciones();
    const filtro3:any = campo.value;  
    //console.log(filtro1,filtro2,filtro3);
    this._filtros.setFiltros(filtro1,filtro2,filtro3);
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

  /*
  onChange(){
    console.log(this.tematicasCheckbox);
    console.log(this.duracionesCheckbox);
  }
  */
}