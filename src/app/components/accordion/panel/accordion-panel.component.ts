import { Component, EventEmitter, Input, Output } from '@angular/core';
import { accordionSlide } from '../../../animations/slide-in-animation';
import rotateArrow from '../../../animations/rotation-animations';

@Component({
  selector: 'app-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.scss'],
  animations: [accordionSlide, rotateArrow],
})
export default class AccordionPanelComponent {
  @Input() title: string;

  @Input() opened = false;

  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();

  public buttonClass: string;

  public openAccordion(): void {
    this.toggle.emit();
  }
}
