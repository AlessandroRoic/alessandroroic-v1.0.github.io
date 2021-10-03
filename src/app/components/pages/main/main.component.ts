import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export default class MainComponent implements OnInit {
  public slides: string[];

  ngOnInit(): void {
    this.slides = ['curiosone-bot-logo.png', 'logo.svg'].map((slide: string) => `../../../../assets/slides/${slide}`);
  }
}
