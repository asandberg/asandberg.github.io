import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CVComponent} from './cv';
import {PortfolioComponent} from './portfolio';
import {AboutMeComponent} from './about';
import {ArtifactComponent} from './pages/artifact';
import {SitefolkComponent} from './pages/sitefolk';

@Component({
  selector: 'sandberg-root',
  template: require('./base.html')
})
export class RootComponent {}

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
    path: 'sitefolk',
    component: SitefolkComponent
  }
];

export const routing = RouterModule.forRoot(routes);
