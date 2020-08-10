import { Component, OnInit } from '@angular/core';
import { Square, RektAngle } from '../Shape';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css'],
  /*template: `
  <button (click)="onClickMe()">Click me!</button>
  {{clickMessage}}`*/
})
export class ClickComponent implements OnInit {
  showSquare = '';
  showRekt = '';

  number : number;
  number2 : number;

  constructor() { }


  ngOnInit(): void {
  }

  onClickMe() {
    let square = new Square(this.number, this.number2);
    let rektAngle = new RektAngle(this.number, this.number2);

    this.showSquare = "Square Omkreds :" +  square.CalculateOmkreds() +
                      "Areal: " + square.CalculateAreal();
  
    this.showRekt = "Rekt Omkreds; " + rektAngle.CalculateOmkreds() + 
                    "Areal: " + rektAngle.CalculateAreal();
   }

  onKey1(value: string) {
    this.number = <number><any>value;

  }

  onKey2(value: string) {
    this.number2 = <number><any>value;

  }

}
