import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import HomePageComponent from './homepage/home-page.component';
import SharedModule from '../shared/shared.module';

const components = [HomePageComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, SharedModule],
})
export default class PagesModule {}
