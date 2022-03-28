import {
  Directive,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[click.stop]',
})
export class StopPropagationDirective implements OnInit, OnDestroy {
  @Output('click.stop') private _stopEventClick =
    new EventEmitter<MouseEvent>();
  private _unlistenClick!: () => void;

  constructor(private _elRef: ElementRef, private _renderer: Renderer2) {}

  ngOnInit(): void {
    this._unlistenClick = this._renderer.listen(
      this._elRef.nativeElement,
      'click',
      (evt: MouseEvent) => {
        evt.stopPropagation();
        this._stopEventClick.emit(evt);
      }
    );
  }

  ngOnDestroy(): void {
    this._unlistenClick();
  }
}
