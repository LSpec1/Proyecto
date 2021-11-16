import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

var canvas:any = (<HTMLElement>document.getElementById('DemoCanvas'));
  
  if (canvas?.getContext) 
 {
  var context = canvas.getContext('2d');
  // Reset the current path
  context.beginPath(); 
  // Staring point (10,45)
   context.moveTo(10,45);
  // End point (180,47)
  context.lineTo(180,47);
  // Make the line visible
  context.stroke();
  }