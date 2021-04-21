import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {sideBarReducer} from './store/reducers/sidebar.reducer';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({sidebar: sideBarReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
