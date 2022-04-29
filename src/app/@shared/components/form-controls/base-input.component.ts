import { OnInit, Component, Input, AfterViewInit, HostBinding } from '@angular/core';

import { BaseFieldControlComponent } from './base-field-control.component';

type TInputType = 'email' | 'password' | 'number' | 'date' | 'text';

@Component({
  template: '',
})
export abstract class BaseInputComponent extends BaseFieldControlComponent implements OnInit, AfterViewInit {
  @Input() type: TInputType = 'text';
  @Input() toFixed: number = 0;
  @Input() min?: number | string;
  @Input() max?: number | string;
  @Input() minLength?: number;
  @Input() maxLength?: number;
  @Input() autocomplete?: 'on' | 'off';
  @Input() transform: 'uppercase' | 'lowercase' | 'none' = 'none';
  @Input() resizable: boolean = false;
  @HostBinding('class.b1-page-inputWithIcon') @Input() icon?: string;
  private decimals!: number;

  ngOnInit(): void {
    this.decimals = Math.abs(Math.round(this.toFixed));
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    if (this.type === 'password') {
      this.checkRequiredProps(['autocomplete']);
      this.renderer.setAttribute(this.formControlRef.nativeElement, 'autocomplete', this.autocomplete!);
    }
  }

  writeValue(value: string): void {
    const val: string = this.getVal(value);
    super.writeValue(val);
  }

  handleValue(value: string): void {
    const val: string = this.getVal(value);
    this.onChange(val);
  }

  private getVal(value: string): string {
    return this.type === 'number' ? (+value).toFixed(this.decimals) : value;
  }
}
