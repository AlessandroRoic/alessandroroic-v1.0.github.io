import {Component, Input, OnInit} from '@angular/core';
import {AccordionContent} from '../../models/accordion-content';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() content: AccordionContent[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
