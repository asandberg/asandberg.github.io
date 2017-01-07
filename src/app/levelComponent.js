import {Component, Sanitizer} from '@angular/core';
import {LevelService} from './level.service.js';

@Component({
  selector: 'level-info',
  template: `
    <div id="level">
      <div class="level-guide" *ngIf="showGuide">
        <div class="arrow"></div>
        <h3>Clear challenges and reach the max level!</h3>
        <p>Explore the website </p>
        <p>Challenges:</p>
        <div *ngFor="let challenge of getChallengeDescriptions()" class="challenge-description" [ngClass]="{'completed':challenge.completed}">{{challenge.completed ? '☑' : '☐'}} {{challenge.description}}</div>
      </div>
      <div class="challenge-cleared" *ngFor="let challenge of challengeNotifications" [style.opacity]="challenge.opacity">
        <!-- <img src="/img/icon.png"> -->
        <h4>Challenge cleared!</h4><span>{{challenge.exp}} exp</span>
        <p>{{challenge.description}}</p>
      </div>
      <div *ngFor="let stat of getStatIncrements()" class="stat-notification" [style.opacity]="stat.opacity">
        <span>{{stat.title}} increased by </span><span>{{stat.value}}</span>
      </div>
      <div class="exp-bar">
        <div class="level-number" [ngClass]="{'animated-scale': getAnimatedState(), 'max-level': isLevelMaxed()}" (mouseover)="onMouseOverLevelIcon()" (mouseleave)="onMouseLeaveLevelIcon()">{{getLevel()}}</div>
        <div class="red-bar" [style.width]="getExpBarWidth()"></div>
      </div>
    </div>
  `
})
export class LevelComponent {
  width : number = 0;
  statNotifications = [];
  challengeNotifications = [];
  showGuide = false;

  constructor(levels : LevelService, sanitizer:Sanitizer) {
    this.levels = levels;
    this.sanitizer = sanitizer;
    this.levels.onChallengeCleared((exp, description) => {
      this.setChallengeNotification(exp, description);
    });
  }

  getChallengeDescriptions() {
    return this.levels.getChallenges();
  }

  onMouseOverLevelIcon() {
    this.showGuide = true;
  }
  onMouseLeaveLevelIcon() {
    this.showGuide = false;
  }

  setChallengeNotification(exp, description) {
    const challengeNotification = {exp, description};
    challengeNotification.opacity = 0;
    this.challengeNotifications.push(challengeNotification);

    // Do transition from 0 opacity to 1, wait 4 secs, from 1 opacity to 0, and remove the element.
    setTimeout(() => {
      challengeNotification.opacity = 1;
      setTimeout(() => {
        challengeNotification.opacity = 0;
        setTimeout(() => {
          this.challengeNotifications.splice(this.challengeNotifications.indexOf(challengeNotification), 1);
        }, 1000);
      }, 4000);
    }, 30);
  }

  getAnimatedState() {
    return this.levels.getLevelIncreasingState();
  }

  getExpBarWidth() {
    let exp = this.levels.getExpBarWidth();
    exp = Math.min(exp, 10);
    return this.sanitizer.bypassSecurityTrustStyle(`${(exp / 10) * 100}%`);
  }

  increaseLevel() {
    this.width++;
  }

  isLevelMaxed() {
    return this.levels.isLevelMaxed();
  }

  getLevel() {
    return this.levels.isLevelMaxed() ? "MAX" : this.levels.getLevel();
  }

  getStatIncrements() {
    return this.levels.getStatIncrements();
  }
}
