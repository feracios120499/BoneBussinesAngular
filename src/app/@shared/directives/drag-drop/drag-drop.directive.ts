import { Directive, EventEmitter, Output, HostListener, HostBinding, Renderer2, ElementRef } from '@angular/core';
@Directive({
  selector: '[dragDropFileUpload]',
})
export class DragDropFileUploadDirective {
  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}
  @Output() fileDropped = new EventEmitter<any>();
  // Dragover Event
  @HostListener('dragover', ['$event']) dragOver(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.renderer.addClass(this.hostElement.nativeElement, 'hover');
  }
  // Dragleave Event
  @HostListener('dragleave', ['$event']) public dragLeave(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.renderer.removeClass(this.hostElement.nativeElement, 'hover');
  }
  // Drop Event
  @HostListener('drop', ['$event']) public drop(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
