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


  public empleo:any;
  public bolsa:any;
  public wea:any;
  id:number=0;
  estado:boolean = false;
  empleoSugeridos:any
  aux:any;


  constructor(private ruta:ActivatedRoute, private router: Router, private _bolsa: BolsaService, private route: ActivatedRoute) {



    //this.empleoSugeridos = Object.create(empleos);
  }

  ngOnInit(): void {
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"]
    })
    this._bolsa.getEmpleosById(this.id).subscribe(datos=>{
      this.empleo = datos;

    })
    console.log(this.empleo);
    //this.empleoSugeridos = this._bolsa.reloadEmpleos(this.empleo!);
    //this.empleoSugeridos.splice(2,this.empleoSugeridos.length);
    //this.obtenerEmpleoById(this.id);
  }


  postular(){
    this.estado=true;
  }

  redireccionar(idnoticia:number){
    this.router.navigate(['/empleo',idnoticia]).then(()=>{
      window.location.reload();
    })
  }

  obtenerEmpleoById(id:any){
    this._bolsa.getEmpleosById(id).subscribe(datos=>{
      this.empleo = datos;
    },error =>{
      console.log(error);
    })
  }

  obtenerEmpleos():any{
    this._bolsa.getBolsa().subscribe(datos=> {
      this.bolsa = datos;
      console.log(datos);
      this.estado= true;
    }, error => {
      console.log(error);
    })
  }
}
