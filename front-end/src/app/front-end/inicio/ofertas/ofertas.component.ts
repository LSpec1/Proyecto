import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {

  ofertas: any[] = [
    { 
      titulo: "Programador front-end en empresa",
      empresa: "Program S.A.C",
      ubicacion: "Santiago de Chile, Chile",
      tiempo: 12,
      imagen: "https://e7.pngegg.com/pngimages/92/187/png-clipart-logo-company-business-creative-company-logo-free-logo-design-template-company.png"
    },{ 
      titulo: "Diseñador UI/UX en empresa",
      empresa: "UXp S.A.S",
      ubicacion: "Bogotá, Colombia",
      tiempo: 28,
      imagen: "https://e7.pngegg.com/pngimages/92/187/png-clipart-logo-company-business-creative-company-logo-free-logo-design-template-company.png"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
