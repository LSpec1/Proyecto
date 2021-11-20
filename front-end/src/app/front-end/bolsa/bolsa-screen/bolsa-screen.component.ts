import { Component, OnInit } from '@angular/core';
import { BolsaService } from 'src/app/servicios/bolsa.service';


@Component({
  selector: 'app-bolsa-screen',
  templateUrl: './bolsa-screen.component.html',
  styleUrls: ['./bolsa-screen.component.scss']
})
export class BolsaScreenComponent implements OnInit {

  _bolsa:BolsaService = new BolsaService;

  constructor() {

  }
  ngOnInit(): void {
  }

}
