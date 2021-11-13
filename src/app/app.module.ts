import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import AppComponent from './app.component';
import { environment } from '../environments/environment';
import { reducers } from './store';
import PagesModule from './components/pages/pages.module';
import SharedModule from './components/shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    PagesModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
