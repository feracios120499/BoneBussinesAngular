import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { provideValueAccessor } from '@methods/provide-value-accessor.method';
import { BaseControlComponent } from '@form-controls/base-control.component';

@Component({
  selector: 'b1-radio-button-group',
  templateUrl: './b1-radio-button-group.component.html',
  styleUrls: ['./b1-radio-button-group.component.scss'],
  providers: [provideValueAccessor(B1RadioButtonGroupComponent)],
  host: {
    '(change)': 'handleValue($event.target.value)',
  },
})
export class B1RadioButtonGroupComponent extends BaseControlComponent implements OnInit {
  @Input() items!: { value: string; label: string; tooltip?: string }[];
  @Input() disabledValues: string[] = [];
  @Input() name?: string;
  @Input() direction: 'vertical' | 'horizontal' = 'vertical';
  @Input() classItem = '';
  @Input() label?: string;
  @Input() class = '';

  inputName!: string;

  ngOnInit(): void {
    this.checkRequiredProps(['items']);
    if (this.formControl) {
      this.inputName = this.getControlName(this.formControl);
    } else {
      this.checkRequiredProps(['name']);
      this.inputName = this.name!;
    }
  }

  writeValue(value: string): void {
    super.writeValue(value);
    // To update initial 'checked' attribute:
    this.changeDetectorRef.detectChanges();
  }

  handleValue(value: string): void {
    this.onChange(value);
  }

  getClass(index: number): string {
    if (this.direction == 'horizontal') return 'b1-mr-4';
    if (this.direction == 'vertical' && index !== 0) return 'b1-mt-4';
    return '';
  }

  private getControlName(control: AbstractControl): string {
    return Object.keys(control.parent!.controls).find((name) => control === control.parent!.get(name))!;
  }
}
