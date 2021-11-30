import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-screen',
  templateUrl: './inicio-screen.component.html',
  styleUrls: ['./inicio-screen.component.scss']
})

export class InicioScreenComponent implements OnInit {

  constructor(private router: Router) {
    let color_cuerpo_primario = "rgb(201, 201, 201)"
    
  }

  ngOnInit(): void {
  }



}
