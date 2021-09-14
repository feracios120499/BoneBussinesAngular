import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, HostBinding } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, filter, map, pairwise, share, throttleTime } from 'rxjs/operators';

enum VisibilityState {
    Visible = 'visible',
    Hidden = 'hidden'
}

enum Direction {
    Up = 'Up',
    Down = 'Down'
}

@Component({
    selector: 'b1-sticky-header',
    template: `<ng-content></ng-content>`,
    styles: [
        `
        :host {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
        }
        .info-open :host{
            position: relative;
        }
      `
    ],
    animations: [
        trigger('toggle', [
            state(
                VisibilityState.Hidden,
                style({ opacity: 0, transform: 'translateY(-100%)' })
            ),
            state(
                VisibilityState.Visible,
                style({ opacity: 1, transform: 'translateY(0)' })
            ),
            transition('* => *', animate('200ms ease-in'))
        ])
    ]
})
export class B1StickyHeaderComponent implements AfterViewInit {
    private isVisible = true;

    @HostBinding('@toggle')
    get toggle(): VisibilityState {
        return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
    }

    ngAfterViewInit() {
        const scroll$ = fromEvent(window, 'scroll').pipe(
            throttleTime(10),
            map(() => window.pageYOffset),
            filter((value) => value >= 90),
            pairwise(),
            map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
            distinctUntilChanged(),
            share()
        );

        const scrollUp$ = scroll$.pipe(
            filter(direction => direction === Direction.Up)
        );

        const scrollDown = scroll$.pipe(
            filter(direction => direction === Direction.Down)
        );

        scrollUp$.subscribe(() => (this.isVisible = true));
        scrollDown.subscribe(() => (this.isVisible = false));
    }
}
