import { CdkFixedSizeVirtualScroll, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, Directive, Input } from '@angular/core';
import { filter, first } from 'rxjs/operators';

@Directive({
  selector: '[item-autosize]'
})
export class ItemAutosizeDirective implements AfterViewInit {

  @Input('item-autosize') viewport: CdkVirtualScrollViewport | CdkFixedSizeVirtualScroll | undefined;
  constructor() { }

  ngAfterViewInit(): void {
    const viewportObject = (this.viewport as CdkVirtualScrollViewport);
    viewportObject?.renderedRangeStream.pipe(
      filter(() => !!viewportObject && !!viewportObject?._totalContentHeight && !!viewportObject?.getDataLength()), first()
    ).subscribe(() => {

      const scrollObject = (this.viewport as CdkFixedSizeVirtualScroll);
      if (scrollObject) {
        scrollObject.itemSize = parseInt(viewportObject?._totalContentHeight || '0', 10) / (viewportObject?.getDataLength() || 0);
        console.log(scrollObject.itemSize);
        console.log(scrollObject);
      }
    });
  }

}
