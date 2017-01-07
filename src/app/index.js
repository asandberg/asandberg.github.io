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
import {ArtifactComponent} from './pages/artifact';
import {SitefolkComponent} from './pages/sitefolk';
import {LevelComponent} from './levelComponent.js';

import {LevelService} from './level.service.js';

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
    AboutMeComponent,
    ArtifactComponent,
    SitefolkComponent,
    LevelComponent
  ],
  bootstrap: [RootComponent],
  providers: [LevelService]
})
export class AppModule {}
