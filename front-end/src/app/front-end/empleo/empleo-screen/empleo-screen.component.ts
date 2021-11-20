import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  empleoSugeridos:any
  _bolsa:BolsaService = new BolsaService

  constructor(private ruta:ActivatedRoute, private router: Router) {
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"]
    })
    this.empleoSugeridos = Object.create(empleos);

  }

  ngOnInit(): void {
    this.empleo = empleos.find(objeto=>objeto._idNoticia==this.id);
    this.empleoSugeridos = this._bolsa.reloadEmpleos(this.empleo!);
    this.empleoSugeridos.splice(2,this.empleoSugeridos.length);
  }


  postular(){
    this.estado=true;
  }

  redireccionar(idnoticia:number){
    this.router.navigate(['/empleo',idnoticia]).then(()=>{
      window.location.reload();
    })
  }


}
