import { Component, Input, OnInit } from '@angular/core';

import { BaseInputComponent } from '@forms/base-input.component';
import { provideValueAccessor } from '@methods/provide-value-accessor.method';

@Component({
  selector: 'b1-masked-input',
  templateUrl: './b1-masked-input.component.html',
  styleUrls: ['./b1-masked-input.component.scss'],
  providers: [provideValueAccessor(B1MaskedInputComponent)],
  host: {
    class: 'b1-input',
  },
})
export class B1MaskedInputComponent
  extends BaseInputComponent
  implements OnInit
{
  @Input() mask: string = '';
  @Input() prefix: string = '';
  // @Input() patterns?: { [key: string]: { pattern: RegExp } };

  ngOnInit(): void {
    this.checkRequiredProps(['mask']);
  }

  // to escape warning about using 'disabled'-attribute
  // when passing 'formControl' to 'input'-element:
  setDisabledState(isDisabled: boolean): void {
    // needs to be wrapped in setTimout to avoid an error:
    setTimeout(() =>
      this.renderer.setProperty(
        this.formControlRef.nativeElement,
        'disabled',
        isDisabled
      )
    );
  }
}
