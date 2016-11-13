import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CVComponent} from './cv';
import {PortfolioComponent} from './portfolio';

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
  }
];

export const routing = RouterModule.forRoot(routes);
