import {animate, animateChild, group, query, sequence, style, transition, trigger} from '@angular/animations';

export const sideNavSlide = trigger('sideNavSlide', [
  transition(':enter', [
    style({transform: 'translate3d(100%, 0, 0)'}),
    animate('0.35s ease-in', style({
      transform: 'translate3d(0, 0, 0)'
    }))
  ]),
  transition(':leave', animate('0.35s ease-out', style({
    transform: 'translate3d(100%, 0, 0)'
  })))
]);

export const overlayFade = trigger('overlayFade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.4s',
      style({ opacity: 1 }))
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('0.4s',
      style({ opacity: 0 }))
  ]),
]);

export const sideNav = trigger('sideNav', [
  transition(':enter', group([
    sequence([
      query('@sideNavSlide', animateChild(), {optional: true}),
      query('@fadeInGrow', animateChild(), {optional: true})
    ]),
  ])),
  transition(':leave', group([
      query('@sideNavSlide', animateChild(), {optional: true}),
  ]))
]);
