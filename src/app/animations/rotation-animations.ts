import { animate, state, style, transition, trigger } from '@angular/animations';

const rotateArrow = trigger('rotateArrow', [
  state('open', style({ transform: 'rotate(-180deg)' })),
  state('close', style({ transform: 'rotate(0)' })),
  transition('close => open', [animate('0.25s ease-in')]),
  transition('open => close', [animate('0.25s ease-in')]),
]);

export default rotateArrow;
