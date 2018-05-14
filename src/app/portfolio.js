import {Component} from '@angular/core';
import {LevelService} from './level.service.js';

@Component({
  selector: 'fountain-app',
  template: require('./portfolio.html'),
  host: {'(window:scroll)': 'track($event)'}
})
export class PortfolioComponent {
  // pointless comment
  constructor(levels : LevelService) {
    this.portfolio = [
      {
        img: "/img/plusminus.png",
        name: "Plusminus",
        routerLink: "mushroom-princess",
        description: "A puzzle adventure game created during a six week project in Aalto University in 2017. I was working in a team of five, and my main responsibilities were game design, usability and playability design, and programming. The game was created using Unity."
      },
      {
        img: "/img/mushroomprincess.png",
        name: "Mushroom Princess",
        routerLink: "mushroom-princess",
        description: "A puzzle adventure game created during a six week project in Aalto University in 2017. I was working in a team of five, and my main responsibilities were game design, usability and playability design, and programming. The game was created using Unity."
      },
      {
        img: "/img/mushroomprincess.png",
        name: "Mushroom Princess",
        routerLink: "mushroom-princess",
        description: "A puzzle adventure game created during a six week project in Aalto University in 2017. I was working in a team of five, and my main responsibilities were game design, usability and playability design, and programming. The game was created using Unity."
      },
      {
        img: "/img/frozenforce.png",
        name: "Frozen Force",
        link: "http://frozenforce.herokuapp.com/#/",
        description: "A website made with Angular, Node.js, MongoDB, and Heroku in 2014 for a small Finnish game community I'm part of. I was the only developer of the site and thus responsible of the design, graphics, and both server and client side code."
      },
      {
        img: "/img/artifact.png",
        name: "Artifact",
        routerLink: "artifact",
        description: "A bullet hell game made with C# and Microsoft XNA Game library in 2012 as my graduation work at Oulu Vocational School. I programmed and made the graphics for the project."
      },
      {
        img: "/img/lattyyn.png",
        name: "Lättyyn",
        link: "https://globalgamejam.org/2018/games/l%C3%A4ttyyn",
        description: "A fast-paced competitive multiplayer game where motion controls and floppy physics bring hilarity and hate to the fighting game genre. Made during weekend-long Finnish Game Jam January 2018."
      },
      {
        img: "/img/solar.png",
        name: "Solar Calamity",
        link: "http://anttisandberg.com/starsmaker/",
        description: "A Unity game about the solar system made in a weekend-long game jam, RAY Game Jam 2 in November 2016. I was a programmer, game designer, and graphic artist in our team of three jammers."
      },
      {
        img: "/img/sitefolk.png",
        name: "Site Folk",
        routerLink: "sitefolk",
        description: "A game community website I founded and maintained in 2008-2015 with a friend. I was responsible of programming and most of the graphical design in the website's five iterations during eight years. Technologies involved: PHP, MySQL, JavaScript, Flash, WordPress."
      },
      {
        img: "/img/curtaincall.png",
        name: "Curtain Call",
        link: "https://asandberg.github.io/curtain-call",
        description: "Curtain call is an HTML5 game I made in 2012. The game was made as an experiment of HTML5 and class structures in JavaScript. The game also involved a highscore list created with PHP and MySQL."
      },
      {
        img: "/img/imagemapper.png",
        name: "ImageMapper",
        link: "https://wordpress.org/plugins/imagemapper/",
        description: "ImageMapper is a WordPress plugin I made in 2013 while working in Aalto University. Technologies involved are HTML5, PHP, and naturally WordPress."
      }
    ];
    this.levels = levels;
    window.onfocus = () => {
      this.onWindowFocus();
    };
  }

  gamePortfolio = ["Curtain Call", "Artifact", "Solar Calamity"];
  webPortfolio = ["Curtain Call", "Site Folk", "ImageMapper", "Frozen Force"];
  clickedItems = [];

  onWindowFocus() {
    let exists = true;
    for (let i = 0; i < this.gamePortfolio.length; i++) {
      if (this.clickedItems.indexOf(this.gamePortfolio[i]) < 0) {
        exists = false;
        break;
      }
    }
    if (exists) {
      this.levels.triggerChallenge("gamePortfolio");
    }
    exists = true;
    for (let i = 0; i < this.webPortfolio.length; i++) {
      if (this.clickedItems.indexOf(this.webPortfolio[i]) < 0) {
        exists = false;
        break;
      }
    }
    if (exists) {
      this.levels.triggerChallenge("webPortfolio");
    }
  }

  portfolioLinkClicked(item) {
    if (this.clickedItems.indexOf(item.name) < 0) {
      this.clickedItems.push(item.name);
    }
  }

  track($event) {
    const body = document.body;
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.levels.triggerChallenge("bottomOfPortfolio");
    }
  }
}
