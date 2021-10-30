import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export default class MainComponent implements OnInit {
  slides: string[];

  pills = [
    'Javascript (ES6+)',
    'Typescript',
    'SCSS',
    'Angular',
    'Node.js',
    'NgRx',
    'RxJs',
    'Bootstrap',
    'Java EE',
    'Spring',
    'PostgreSQL',
    'Scrum',
    'Bootstrap',
  ];

  ngOnInit(): void {
    this.slides = ['curiosone-bot-logo.png', 'logo.svg'].map((slide: string) => `../../../../assets/slides/${slide}`);
  }
}
