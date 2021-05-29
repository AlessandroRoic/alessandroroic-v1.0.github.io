import {Component, OnInit} from '@angular/core';
import {AccordionContent} from '../../models/accordion-content';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  accordionList: AccordionContent[];

  constructor() {
  }

  ngOnInit(): void {
    this.accordionList = [
      {
        title: 'Accenture',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        opened: true
      },
      {
        title: 'JPanik',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        opened: false
      },
      {
        title: 'Education',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        opened: false
      },
      {
        title: 'Other',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        opened: false
      }
    ];
  }
}
