import { Component, ChangeDetectionStrategy, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';

@Component({
  selector: 'b1-rating',
  templateUrl: './b1-rating.component.html',
  styleUrls: ['./b1-rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'b1-input',
  },
})
export class B1RatingComponent extends withRequiredPropsCheck() implements AfterViewInit {
  @Input() formGroup!: FormGroup;
  @Input() max = 5;

  @ViewChild('labelRef') private labelRef!: ElementRef<HTMLLabelElement>;

  constructor(private controlContainer: ControlContainer) {
    super();
  }

  ngOnInit(): void {
    this.checkRequiredProps(['formGroup']);
  }

  ngAfterViewInit(): void {
    if (!this.labelRef.nativeElement.textContent) {
      throw new Error('Label text is required!');
    }
  }

  get formControl(): FormControl {
    return this.controlContainer.control as FormControl;
  }
}
