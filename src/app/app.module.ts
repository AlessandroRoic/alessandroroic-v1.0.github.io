import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {reducers} from './store';
import {SocialMediasComponent} from './components/social-medias/social-medias.component';
import {AccordionComponent} from './components/accordion/accordion.component';
import {BackTopArrowComponent} from './components/back-top-arrow/back-top-arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidenavComponent,
    SocialMediasComponent,
    AccordionComponent,
    BackTopArrowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
