import { Component, forwardRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'b1-drag-drop-files',
  templateUrl: './b1-drag-drop-files.component.html',
  styleUrls: ['./b1-drag-drop-files.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B1DragDropFilesComponent),
      multi: true,
    },
  ],
})
export class B1DragDropFilesComponent implements OnInit, ControlValueAccessor {
  constructor() {}
  files: File[] = [];

  @Input() accept?: string;
  @Input() multiple = false;

  private onChange = (value: File[] | File) => {};
  private onTouched = () => {};

  writeValue(obj: File[] | File): void {
    if (!obj) {
      return;
    }
    if (Array.isArray(obj)) {
      this.files = obj;
    } else {
      this.files.push(obj);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  selectFiles(event: any): void {
    this.files = Array.from(event.target.files);
    this.onChange(this.files);
  }

  droppedFiles(event: FileList): void {
    const acceptExtensions = this.accept?.split(',').map((p) => p.replace('.', '').toUpperCase()) || [];

    this.files = Array.from(event).filter((p) => acceptExtensions.indexOf(this.getExtension(p) || '') >= 0);
    this.onChange(this.files);
  }

  removeFile(file: File): void {
    this.files = this.files.filter((p) => p !== file);
    this.onChange(this.files);
  }

  getExtension(file: File): string | undefined {
    return file?.name.split('.').pop()?.toUpperCase();
  }

  ngOnInit(): void {}
}
