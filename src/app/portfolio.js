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
        img: "/img/frozenforce.png",
        name: "Frozen Force",
        description: "A website for a group I'm part of. "
      },
      {
        img: "/img/artifact.png",
        name: "Artifact"
      },
      {
        img: "/img/sitefolk.png",
        name: "Site Folk"
      },
      {
        img: "/img/imagemapper.png",
        name: "Imagemapper"
      }
    ];
  }
}
