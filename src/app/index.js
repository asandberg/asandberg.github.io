import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {FooterComponent} from './footer';
import {CVComponent} from './cv';
import {AboutMeComponent} from './about';
import {PortfolioComponent} from './portfolio';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent,
    CVComponent,
    PortfolioComponent,
    AboutMeComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
