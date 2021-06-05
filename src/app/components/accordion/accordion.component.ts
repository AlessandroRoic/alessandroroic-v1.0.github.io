import {Component, Input, OnInit} from '@angular/core';
import {AccordionContent} from '../../models/accordion-content';
import {accordionSlide} from '../../animations/slide-in-animation';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [accordionSlide]
})
export class AccordionComponent implements OnInit {

  @Input() content: AccordionContent[];

  constructor() {
  }

  ngOnInit(): void {
  }

  openAccordion(index): void {
    this.content.forEach((element, elementIndex) => {
      element.opened = elementIndex === index;
    });
  }
}
