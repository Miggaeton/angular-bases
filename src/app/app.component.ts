import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primera app de Angular';
  counter: number = 10

increaseBy (numero: number):void {
this.counter++;
}

decreaseBy (numero: number):void {
  this.counter--;
  }

reset():void{
  this.counter = 10
}
}

