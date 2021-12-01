import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BolsaService } from 'src/app/servicios/bolsa.service';

@Component({
  selector: 'app-bolsa-empleador',
  templateUrl: './bolsa-empleador.component.html',
  styleUrls: ['./bolsa-empleador.component.scss']
})
export class BolsaEmpleadorComponent implements OnInit {

  bolsa = Array<any>();
  estado:boolean = false;
  buscador:FormGroup;

  constructor(private _bolsa:BolsaService, private ruta:ActivatedRoute, private router:Router, public FormB:FormBuilder){
    this.buscador=this.FormB.group({
      palabras: [""],
      nacional: [""],
      internacional: [""],
      teletrabajo: [""],
      tiempoCompleto: [""],
      tiempoParcial: [""],
      porHoras: [""],
      salario: [""]
    })
  }

  ngOnInit(): void {
    this.obtenerEmpleos();
  }

  obtenerEmpleos(){
    this._bolsa.getBolsa().subscribe(datos=> {
      this.bolsa = datos
      this.estado = true;
      this._bolsa.setEmpleos(this.bolsa);
    }, error => {
      console.log(error);
    })
  }

  requisitos(){
    let datos:any = {
      "palabras": this.buscador.get("palabras")?.value,
      "nacional": this.buscador.get("nacional")?.value,
      "internacional": this.buscador.get("internacional")?.value,
      "teletrabajo": this.buscador.get("teletrabajo")?.value,
      "tiempoCompleto": this.buscador.get("tiempoCompleto")?.value,
      "tiempoParcial": this.buscador.get("tiempoParcial")?.value,
      "porHoras": this.buscador.get("porHoras")?.value,
      "salario": this.buscador.get("salario")?.value,
    }
    this.validarRequisitos(datos);
  }


  validarRequisitos(datos:any){


    this.bolsa = this._bolsa.getEmpleos()
    let aux = this.bolsa;
    let filtro = Array<any>();
    let contador = 0,max = 0;
    for (let contenido in datos){
      max++;
      if (datos[contenido] == "") contador++;
      if (datos[contenido] != ""){
        switch(contenido){
          case "nacional":
            for (let empleo in aux){
              if (aux[empleo]["pais"]=="Chile"){
                filtro.push(aux[empleo]);
              }
            }
          break;

          case "internacional":
            for (let empleo in aux){
              if (aux[empleo]["pais"]!="Chile"){
                filtro.push(aux[empleo]);
              }
            }
          break;

          case "teletrabajo":
            for (let empleo in aux){
              if (aux[empleo]["asistencia"]=="teletrabajo"){
                filtro.push(aux[empleo]);
              }
            }
          break;

          case "tiempoCompleto":
            for (let empleo in aux){
              if (aux[empleo]["jornada"]=="Full time"){
                filtro.push(aux[empleo]);
              }
            }
          break;

          case "tiempoParcial":
            for (let empleo in aux){
              if (aux[empleo]["jornada"]=="Part time"){
                filtro.push(aux[empleo]);
              }
            }
          break;

          case "porHoras":
            for (let empleo in aux){
              if (aux[empleo]["jornada"]=="Honorario"){
                filtro.push(aux[empleo]);
              }
            }
          break;

          case "salario":
            for (let empleo in aux){
              if (aux[empleo]["jornada"]>="salario"){
                filtro.push(aux[empleo]);
              }
            }
          break;
        }
      }
    }

    if (contador == max){
      this._bolsa.getBolsa().subscribe(data =>{
        this.bolsa = data;
      })
      return;
    }
    this.bolsa = filtro;
  }


  borrarEmpleo(id:string){
    this._bolsa.deleteEmpleo(id).subscribe(data =>{
      alert(data);
      this.obtenerEmpleos();
    }, error=> {
      console.log(error);
    })
  }

  crearEmpleo(){
    this.router.navigate(['/crearEmpleo']);
  }
}
