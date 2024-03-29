import { animate, animateChild, group, query, sequence, state, style, transition, trigger } from '@angular/animations';

export const sideNavSlide = trigger('sideNavSlide', [
  transition(':enter', [
    style({ transform: 'translate3d(100%, 0, 0)' }),
    animate(
      '0.25s ease-in',
      style({
        transform: 'translate3d(0, 0, 0)',
      }),
    ),
  ]),
  transition(
    ':leave',
    animate(
      '0.25s ease-out',
      style({
        transform: 'translate3d(100%, 0, 0)',
      }),
    ),
  ),
]);

export const overlayFade = trigger('overlayFade', [
  transition(':enter', [style({ opacity: 0 }), animate('0.4s', style({ opacity: 1 }))]),
  transition(':leave', [style({ opacity: 1 }), animate('0.4s', style({ opacity: 0 }))]),
]);

export const sideNav = trigger('sideNav', [
  transition(
    ':enter',
    group([
      group([
        animate('0.25s ease-in', style({ background: 'rgba(0,0,0,0.5)' })),
        sequence([query('@sideNavSlide', animateChild(), { optional: true }), query('@fadeInGrow', animateChild(), { optional: true })]),
      ]),
    ]),
  ),
  transition(
    ':leave',
    group([group([animate('0.25s', style({ background: 'rgba(0,0,0,0)' })), query('@sideNavSlide', animateChild(), { optional: true })])]),
  ),
]);

export const accordionSlide = trigger('accordionSlide', [
  state(
    'close',
    style({
      height: 0,
      transform: 'translate3d(0, 0, 0)',
    }),
  ),
  state(
    'open',
    style({
      height: '*',
    }),
  ),
  transition('open<=>close', animate('0.35s ease-in-out')),
]);
