import {Component} from '@angular/core';
import {LevelService} from './level.service.js';

@Component({
  selector: 'fountain-app',
  template: require('./about.html'),
  host: {'(window:scroll)': 'track($event)'}
})
export class AboutMeComponent {

  gainedStats : any[] = [];

  constructor(levels : LevelService) {
    this.levels = levels;
    this.gainedStats.push({value: "-1", label: "Productivity"});
    this.gainedStats.push({value: "+2", label: "Coordination"});
    this.gainedStats.push({value: "±0", label: "Knowledge"});
    this.gainedStats.push({value: "+1", label: "Networking"});
  }

  asd() {
    this.levels.triggerChallenge("clickTheAvatar");
  }
  asd2() {
    this.levels.triggerChallenge("openCV");
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
