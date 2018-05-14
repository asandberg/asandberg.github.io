import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CVComponent} from './cv';
import {PortfolioComponent} from './portfolio';
import {AboutMeComponent} from './about';
import {ArtifactComponent} from './pages/artifact';
import {SitefolkComponent} from './pages/sitefolk';
import {MushroomPrincessComponent} from './pages/mushroomprincess';
import {PlusminusComponent} from './pages/plusminus';

@Component({
  selector: 'sandberg-root',
  template: require('./base.html'),
  host: {'(window:scroll)': 'track($event)'}
})
export class RootComponent {
  onActivate($event, outlet) {
    document.body.scrollTop = 0;
  }

  track($event) {
    this.titleImageScroll = `0 ${Math.min(window.pageYOffset / 1.5, 200)}px`;
  }
  titleImageScroll = 0;
}

export const routes = [
  {
    path: '',
    component: PortfolioComponent
  },
  {
    path: 'cv',
    component: CVComponent
  },
  {
    path: 'about',
    component: AboutMeComponent
  },
  {
    path: 'artifact',
    component: ArtifactComponent
  },
  {
    path: 'mushroom-princess',
    component: MushroomPrincessComponent
  },
  {
    path: 'sitefolk',
    component: SitefolkComponent
  },
  {
    path: 'plusminus',
    component: PlusminusComponent
  }
];

export const routing = RouterModule.forRoot(routes, {useHash: true});
