import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = 'angkur mondal';
  imgURL = 'https://picsum.photos/id/15/200/300'
  currentDate: Date = new Date();
  cost = 2000;
  temperature = 25.3;
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large'
  }

  getName() {
    return this.name;
  }

  changeImage(event: KeyboardEvent) {
    this.imgURL = (event.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
  }
}