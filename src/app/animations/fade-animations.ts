import {animate, animateChild, query, stagger, style, transition, trigger} from '@angular/animations';

export const fadeInGrow = trigger('fadeInGrow', [
  transition(':enter', [
    query('@item', [
      stagger(200, animateChild())
    ], { optional: true })
  ]),
  transition(':leave', [
    query('@item', [
      stagger(200, animateChild())
    ], { optional: true })
  ])
]);

export const item = trigger('item', [
  transition(':enter', [
    style({ transform: 'scale(0.5)', opacity: 0 }),
    animate('0.3s cubic-bezier(.8, -0.6, 0.2, 1.5)',
      style({ transform: 'scale(1)', opacity: 1 }))
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('0.3s',
      style({ opacity: 0 }))
  ])
]);
