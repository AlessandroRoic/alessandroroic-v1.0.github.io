import {Component, Input} from '@angular/core';
import {AccordionContent} from '../../models/accordion-content';
import {accordionSlide} from '../../animations/slide-in-animation';
import {rotateArrow} from '../../animations/rotation-animations';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [accordionSlide, rotateArrow]
})
export class AccordionComponent {

  @Input() content: AccordionContent[];

  openAccordion(index): void {
    this.content.forEach((element, elementIndex) => {
      element.opened = elementIndex === index;
    });
  }
}
