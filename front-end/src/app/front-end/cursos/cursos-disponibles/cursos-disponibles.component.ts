import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/cursos.service';

@Component({
  selector: 'app-cursos-disponibles',
  templateUrl: './cursos-disponibles.component.html',
  styleUrls: ['./cursos-disponibles.component.scss']
})
export class CursosDisponiblesComponent implements OnInit {

  //Variable que almacena lo obtenido en el servicio cursos
  listaCursos: any[] = [];
  filtros: any;

  constructor(private _cursos:CursosService) {
    this.listaCursos = _cursos.getListaVideos();
  }

  ngOnInit(): void {
  }

  setFiltros(){

  }
}
