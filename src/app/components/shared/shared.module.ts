import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import SidenavComponent from './sidenav/sidenav.component';
import SocialMediasComponent from './social-medias/social-medias.component';
import AccordionComponent from './accordion/accordion.component';
import BackTopArrowComponent from './back-top-arrow/back-top-arrow.component';
import AccordionPanelComponent from './accordion/panel/accordion-panel.component';
import CarouselComponent from './carousel/carousel.component';
import NavbarComponent from './navbar/navbar.component';

const components = [
  SidenavComponent,
  SocialMediasComponent,
  AccordionComponent,
  BackTopArrowComponent,
  AccordionPanelComponent,
  CarouselComponent,
  NavbarComponent,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule],
})
export default class SharedModule {}
