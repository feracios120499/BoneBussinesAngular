import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { BaseInputComponent } from '../base-input.component';

@Component({
  selector: 'b1-input',
  templateUrl: './b1-input.component.html',
  styleUrls: ['./b1-input.component.scss'],
  providers: [provideValueAccessor(B1InputComponent)],
  host: {
    class: 'b1-input',
  },
})
export class B1InputComponent extends BaseInputComponent {
  @Input() data?: Observable<any>;
  @Output() selectData = new EventEmitter<any>();
  @Output() onFocus = new EventEmitter<void>();
  @Input() itemTemplate?: TemplateRef<any>;
  @Input() uppercase = false;

  focused = false;
  focusedRelated = false;

  @ViewChild('autoCompleteWrapper', { static: false }) autoCompleteWrapper?: ElementRef;

  constructor(renderer: Renderer2, changeDetectorRef: ChangeDetectorRef, translateService: TranslateService) {
    super(renderer, changeDetectorRef, translateService);
  }

  @ViewChild('scrollable', { static: false, read: ElementRef })
  scrollbar?: ElementRef;
  contentWrapper?: HTMLElement;
  autoHeight() {
    this.contentWrapper = document.querySelector('.ng-scroll-content') as any;

    if (this.contentWrapper?.clientHeight == 0) return;
    if (this.scrollbar) {
      this.scrollbar.nativeElement.style.height = this.contentWrapper?.clientHeight + 'px';
    }
  }

  onSelectItem(item: any): void {
    this.selectData.emit(item);
    this.focused = false;
  }

  inputHandleValue(value: any): void {
    if (value && this.uppercase) {
      this.handleValue(value.toUpperCase());
    } else {
      this.handleValue(value);
    }
  }

  inputOnFocus(event: any): void {
    if (event.relatedTarget) {
      this.focusedRelated = true;
    }
    this.focused = true;
    this.onFocus.emit();
  }

  ngOnInit(): void {
    super.ngOnInit();

    if (this.itemTemplate) {
      this.renderer.listen('window', 'click', (e: Event) => {
        if (this.autoCompleteWrapper && !this.autoCompleteWrapper.nativeElement.contains(e.target)) {
          if (this.focusedRelated) {
            this.focusedRelated = false;
            return;
          }
          this.focused = false;
        }
      });
    }
  }
}
