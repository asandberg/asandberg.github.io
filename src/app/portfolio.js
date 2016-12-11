import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./portfolio.html')
})
export class PortfolioComponent {
  // pointless comment
  constructor() {
    this.portfolio = [
      {
        img: "/img/solar.png",
        name: "Solar Calamity",
        link: "http://anttisandberg.com/starsmaker/",
        description: "A Unity game about the solar system made in a weekend-long game jam, RAY Game Jam 2 in November 2016. I was a programmer, game designer, and graphic artist in our team of three jammers."
      },
      {
        img: "/img/frozenforce.png",
        name: "Frozen Force",
        link: "http://frozenforce.herokuapp.com/#/",
        description: "A website made with Angular, Node.js and Heroku in 2014 for a small Finnish game community I'm part of. I was the only developer of the site and thus responsible of the design, graphics, and both server and client side code."
      },
      {
        img: "/img/artifact.png",
        name: "Artifact",
        routerLink: "artifact",
        description: "A bullet hell game made with C# and Microsoft XNA Game library in 2012 as my graduation work at Oulu Vocational School. I programmed and made the graphics for the project."
      },
      {
        img: "/img/sitefolk.png",
        name: "Site Folk",
        routerLink: "sitefolk",
        description: "A game community website I founded and maintained in 2008-2015 with a friend. I was responsible of programming and most of the graphical design in the website's five iterations during eight years. Technologies involved: PHP, MySQL, JavaScript, Flash, WordPress."
      },
      {
        img: "/img/imagemapper.png",
        name: "Imagemapper"
      }
    ];
  }
}
