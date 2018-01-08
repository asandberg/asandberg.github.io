import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'fountain-app',
  template: require('./mushroomprincess.html')
})
export class MushroomPrincessComponent {

  constructor() {
  	this.images = [
  		{url: "img/mp_screen1.png"},
  		{url: "img/mp_screen2.png"},
  		{url: "img/mp_screen3.png"},
  		{url: "img/mp_screen4.png"},
  		{url: "img/mp_screen5.png"}
  	];
    this.image = this.images[0];
  }

  setImage(index) {
  	this.image = this.images[index];
  }
}
