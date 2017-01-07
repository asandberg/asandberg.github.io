import {Component} from '@angular/core';
import {LevelService} from './level.service.js';

@Component({
  selector: 'sandberg-header',
  template: require('./header.html')
})
export class HeaderComponent {
  constructor(levels : LevelService) {
    this.levels = levels;
    setTimeout(() => {
      this.levels.triggerChallenge("stayOnPage");
    }, 1000 * 60 * 10);
  }
  clickContact() {
    this.levels.triggerChallenge("contactMe");
  }
}
