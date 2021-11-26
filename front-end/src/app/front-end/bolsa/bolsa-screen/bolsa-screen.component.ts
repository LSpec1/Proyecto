import { Component, OnInit } from '@angular/core';
import { BolsaService } from 'src/app/servicios/bolsa.service';


@Component({
  selector: 'app-bolsa-screen',
  templateUrl: './bolsa-screen.component.html',
  styleUrls: ['./bolsa-screen.component.scss']
})
export class BolsaScreenComponent implements OnInit {

  bolsa:any;
  estado:boolean = false;
  constructor(private _bolsa:BolsaService) {}

  ngOnInit(): void {
    this.obtenerEmpleos();
  }

  obtenerEmpleos(){
    this._bolsa.getBolsa().subscribe(datos=> {
      this.bolsa = datos
      this.estado= true;
    }, error => {
      console.log(error);
    })
  }

}
