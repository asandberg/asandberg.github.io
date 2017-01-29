import {Component} from '@angular/core';
import {LevelService} from './level.service.js';

@Component({
  selector: 'fountain-app',
  template: require('./about.html'),
  host: {'(window:scroll)': 'track($event)'}
})
export class AboutMeComponent {

  constructor(levels : LevelService) {
    this.levels = levels;
  }

  triggerAvatarChallenge() {
    this.levels.triggerChallenge("clickTheAvatar");
  }

  track($event) {
    const body = document.body;
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.levels.triggerChallenge("bottomOfAbout");
    }
  }
}
