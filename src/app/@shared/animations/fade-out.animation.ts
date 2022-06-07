import { animate, style, transition, trigger } from '@angular/animations';

export const fadeOut = (time = 500) =>
  trigger('fadeOut', [transition(':leave', [animate(`${time}ms ease`, style({ opacity: 0 }))])]);
