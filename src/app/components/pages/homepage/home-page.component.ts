import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export default class HomePageComponent implements OnInit {
  slides: string[];

  pills = [
    'Javascript (ES6+)',
    'Typescript',
    'Sass',
    'Angular',
    'Node.js',
    'NgRx',
    'RxJs',
    'Redux',
    'Bootstrap',
    'Java EE',
    'Spring',
    'PostgreSQL',
    'Scrum',
  ];

  ngOnInit(): void {
    this.slides = ['curiosone-bot-logo.webp'].map((slide: string) => `../../../../assets/slides/${slide}`);
  }
}
