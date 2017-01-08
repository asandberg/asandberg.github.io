import {Injectable} from '@angular/core';

@Injectable()
export class LevelService {
  dataIndex = "ASPortfolio_data";
  currentLevel: number = 0;
  currentExp: number = 0;
  currentExpBarWidth = 0;
  levelIncreasing = false;
  levelIncreaseAnimation = false;
  gainedStats : any[] = [];
  statIncrements : any[] = [];
  onChallengeClearedCallback = null;

  challenges : any[] = {
    clickTheAvatar: {exp: 2, description: "You can't even see the face.", stats: [{label: "Exploration", value: "+1"}]},
    bottomOfCV: {exp: 4, description: "Read through the CV page!", stats: [{label: "Networking", value: "+1"}]},
    bottomOfAbout: {exp: 4, description: "Read through the about me page!", stats: [{label: "Appetite for cookies", value: "+2"}]},
    bottomOfPortfolio: {exp: 4, description: "Browse through the portfolio!", stats: [{label: "Scrolling skill", value: "+2"}]},
    stayOnPage: {exp: 6, description: "Just a moment.", stats: [{label: "Productivity", value: "-1"}]},
    techSkillSecret: {exp: 6, description: "Hero's secret technology.", stats: [{label: "Puzzle solving skills", value: "+3"}, {label: "Efficiency", value: "-1"}]},
    tripToJapan: {exp: 2, description: "The Rising Sun.", stats: [{label: "Adventurer", value: "+1"}, {label: "Kawaii", value: "+1"}]},
    dualWield: {exp: 2, description: "Dual wielding swords.", stats: [{label: "Attack", value: "+1"}, {label: "Clumsiness", value: "+1"}]},
    webPortfolio: {exp: 3, description: "Portfolio of web.", stats: [{label: "Coffee consumption", value: "+1"}]},
    gamePortfolio: {exp: 3, description: "Portfolio of games.", stats: [{label: "Passion", value: "+1"}]},
    contactMe: {exp: 4, description: "Getting in touch.", stats: [{label: "Friendship", value: "+1"}]}
  };
  challengesCleared = {};

  constructor() {
    setTimeout(() => {
      this.updateStatNotification();
    }, 50);
    this.getData();
  }

  getChallenges() {
    const array = [];
    for (const key in this.challenges) {
      if (this.challenges.hasOwnProperty(key)) {
        array.push({description: this.challenges[key].description, completed: this.challengesCleared[key]});
      }
    }
    array.sort((a, b) => a.description > b.description);
    return array;
  }

  onChallengeCleared(cb) {
    this.onChallengeClearedCallback = cb;
  }

  isLevelMaxed() {
    return this.getLevel() === 4;
  }

  triggerChallenge(key) {
    if (!this.challengesCleared[key]) {
      this.challengesCleared[key] = true;
      this.increaseExp(this.challenges[key].exp, this.challenges[key].stats);
      this.onChallengeClearedCallback(this.challenges[key].exp, this.challenges[key].description);
    }
  }

  getLevel(): void {
    return this.currentLevel;
  }

  saveData() {
    const data = {
      challengesCleared: this.challengesCleared,
      level: this.currentLevel,
      exp: this.currentExp,
      gainedStats: this.gainedStats
    };
    localStorage.setItem(this.dataIndex, JSON.stringify(data));
  }

  getData() {
    const data = null; // JSON.parse(localStorage.getItem(this.dataIndex));
    if (data === null) {
      this.currentLevel = 0;
      this.currentExp = 0;
      this.challengesCleared = {};
      this.gainedStats = [];
    } else {
      this.currentLevel = data.level;
      this.currentExp = data.exp;
      this.challengesCleared = data.challengesCleared;
      this.gainedStats = data.gainedStats;
    }
  }

  increaseExp(exp: number, stats: any[]): void {
    this.currentExp += exp;
    this.gainedStats = this.gainedStats.concat(stats);

    if (this.currentExp >= 10 && !this.levelIncreasing) {
      this.levelIncrease();

      setTimeout(() => {
        this.currentExpBarWidth = this.currentExp;
      }, 2000);
    } else {
      this.saveData();
    }
  }

  levelIncrease() {
    this.levelIncreasing = true;
    const stats = this.gainedStats.slice(0);
    this.gainedStats = [];
    this.levelIncreaseAnimation = false;

    setTimeout(() => {
      this.currentLevel++;
      this.levelIncreaseAnimation = true;
      this.displayStatIncrease(stats, () => {
        this.currentExp -= 10;
        this.levelIncreasing = false;
        this.saveData();
      });
    }, 1000);
  }

  displayStatIncrease(stats, finished) {
    this.statIncrements.push({title: stats[stats.length - 1].label, value: stats[stats.length - 1].value, opacity: 0.0, stamp: Date.now()});
    stats.pop();
    if (stats.length > 0) {
      setTimeout(() => {
        this.displayStatIncrease(stats, finished);
      }, 1000);
    } else {
      finished();
    }
  }

  getStatIncrements() {
    return this.statIncrements;
  }

  updateStatNotification() {
    for (let i = 0; i < this.statIncrements.length; i++) {
      this.statIncrements[i].opacity = this.statNotificationOpacity(this.statIncrements[i].stamp);

      if (this.statIncrements[i].opacity === -1) {
        this.statIncrements.splice(i, 1);
        i--;
      }
    }

    setTimeout(() => {
      this.updateStatNotification();
    }, 50);
  }

  statNotificationOpacity(stamp) {
    const diff = Date.now() - stamp;

    if (diff < 500) {
      return diff / 500;
    }
    if (diff < 4000) {
      return 1;
    }
    if (diff < 5000) {
      return 1 - (diff - 4000) / 1000;
    }
    return -1;
  }

  resetExp() {
    console.log("RESET");
    this.currentExp = 0;
    console.log(this.currentExp);
  }

  getExp() : number {
    return this.currentExp;
  }

  getExpBarWidth() : number {
    return this.currentExp;
  }

  getLevelIncreasingState() {
    return this.levelIncreaseAnimation;
  }
}
