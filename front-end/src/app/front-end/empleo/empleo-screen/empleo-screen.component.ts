import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { empleo, empleos } from 'src/app/interfaces/bolsa';
import { BolsaService } from 'src/app/servicios/bolsa.service';

@Component({
  selector: 'app-empleo-screen',
  templateUrl: './empleo-screen.component.html',
  styleUrls: ['./empleo-screen.component.scss']
})
export class EmpleoScreenComponent implements OnInit {


  empleo?:empleo;
  id:number=0;
  estado:boolean = false;
  empleoSugeridos?:Array<empleo>;
  _bolsa:BolsaService = new BolsaService

  constructor(private ruta:ActivatedRoute) {
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"]
    })
  }

  ngOnInit(): void {
    this.empleo = empleos.find(objeto=>objeto._idNoticia==this.id);
    this.empleoSugeridos = this._bolsa.getEmpleos();
    this.empleoSugeridos.splice(this.empleoSugeridos.indexOf(this.empleo!),1);
    this.empleoSugeridos = this._bolsa.sortEmpleos(this.empleoSugeridos);

  }


  postular(){
    this.estado=true;
  }
}
