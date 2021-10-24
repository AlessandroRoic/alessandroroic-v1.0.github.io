import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import AppComponent from './app.component';
import {environment} from '../environments/environment';
import {reducers} from './store';
import SocialMediasComponent from './components/shared/social-medias/social-medias.component';
import SidenavComponent from './components/shared/sidenav/sidenav.component';
import MainComponent from './components/pages/main/main.component';
import AccordionComponent from './components/shared/accordion/accordion.component';
import BackTopArrowComponent from './components/shared/back-top-arrow/back-top-arrow.component';
import AccordionPanelComponent from './components/shared/accordion/panel/accordion-panel.component';
import CarouselComponent from './components/shared/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidenavComponent,
    SocialMediasComponent,
    AccordionComponent,
    BackTopArrowComponent,
    AccordionPanelComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
