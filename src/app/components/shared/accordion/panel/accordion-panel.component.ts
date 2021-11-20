import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { accordionSlide } from '../../../../animations/slide.animation';
import rotateArrow from '../../../../animations/rotation.animations';

@Component({
  selector: 'app-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.scss'],
  animations: [accordionSlide, rotateArrow],
  encapsulation: ViewEncapsulation.None,
})
export default class AccordionPanelComponent {
  @Input() title: string;

  @Input() opened = false;

  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();

  buttonClass: string;

  openAccordion(): void {
    this.toggle.emit();
  }
}
