import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import { Directive, Inject, OnDestroy, OnInit, Self } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { catchError, first, take } from 'rxjs/operators';

@Directive({
  selector: 'cdk-virtual-scroll-viewport[autosize]',
})
export class CdkVirtualScrollViewportPatchDirective
  implements OnInit, OnDestroy
{
  protected readonly destroy$ = new Subject();
  private renderedRangeStreamSub!: Subscription;
  constructor(
    @Self()
    @Inject(CdkVirtualScrollViewport)
    private readonly viewport: CdkVirtualScrollViewport
  ) {}

  ngOnInit(): void {
    try {
      const viewportObject = this.viewport as CdkVirtualScrollViewport;
      const renderedRangeStream = (this.viewport as any)
        .renderedRangeStream as Subject<any>;
      this.renderedRangeStreamSub = renderedRangeStream
        .pipe(take(1))
        .subscribe(() => {
          setTimeout(() => {
            const strategy = (viewportObject as any)._scrollStrategy as any;

            const item =
              viewportObject.elementRef.nativeElement.children[0].children[0];
            const style = getComputedStyle(item);
            const itemSize =
              item.clientHeight +
              parseInt(style.marginTop, 10) +
              parseInt(style.marginBottom, 10);

            viewportObject.setRenderedRange({
              start: 0,
              end:
                (viewportObject.getViewportSize() + strategy._minBufferPx) /
                itemSize,
            });
            strategy.updateItemAndBufferSize(
              itemSize,
              strategy._minBufferPx,
              strategy._maxBufferPx
            );
          });
        });
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy(): void {
    this.renderedRangeStreamSub.unsubscribe();
  }
}
