import { animate, style, transition, trigger } from '@angular/animations';

export const fade = (time = 500) =>
  trigger('fade', [
    transition(':enter', [style({ opacity: '0' }), animate(`${time}ms ease-in-out`, style({ opacity: '1' }))]),
    transition(':leave', [animate(`${time}ms ease-in-out`, style({ opacity: 0 }))]),
  ]);
