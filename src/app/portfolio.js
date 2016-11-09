import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./portfolio.html')
})
export class PortfolioComponent {
  constructor() {
    this.portfolio = [
      {
        img: "app/img/frozenforce.png",
        name: "Frozen Force"
      },
      {
        img: "app/img/artifact.png",
        name: "Artifact"
      },
      {
        img: "app/img/sitefolk.png",
        name: "Site Folk"
      },
      {
        img: "app/img/imagemapper.png",
        name: "Imagemapper"
      }
    ];
  }
}
