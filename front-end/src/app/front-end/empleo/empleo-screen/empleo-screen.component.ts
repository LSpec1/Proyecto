import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { BolsaService } from 'src/app/servicios/bolsa.service';

@Component({
  selector: 'app-empleo-screen',
  templateUrl: './empleo-screen.component.html',
  styleUrls: ['./empleo-screen.component.scss']
})
export class EmpleoScreenComponent implements OnInit {

  estado:boolean = false;
  empleo:any;
  empleoSugeridos:any;
  id:number;


  constructor(private ruta: ActivatedRoute,
    private router: Router,
    private _bolsa: BolsaService){
      this.id=0;
      this.ruta.params.subscribe(data=>{
        this.id = data["id"];
      })
    }

  ngOnInit(){
    this.cargarBolsa();
  }

  postular(){
    this.estado=true;
  }

  redireccionar(idnoticia:number){
    this.router.navigate(['/empleo',idnoticia]).then(()=>{
      window.location.reload();
    })
  }

  cargarBolsa(){
    this._bolsa.getEmpleoSugeridos(this.id).subscribe(data=>{
        this.empleoSugeridos = data;
    });

    this._bolsa.getEmpleosById(this.id).subscribe(data=>{
      this.empleo = data[0];
    });
  }
}
