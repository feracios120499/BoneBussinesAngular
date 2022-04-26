import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'b1-input-error',
  templateUrl: './b1-input-error.component.html',
  styleUrls: ['./b1-input-error.component.scss']
})
export class B1InputErrorComponent implements OnInit {

  constructor() { }

  @Input() control!: FormControl;
  @Input() form?: FormGroupDirective;

  ngOnInit(): void {

  }

  get error(): any | null {
    // функция что бы отображать только первую ошибку из списка
    if (this.control?.errors) {
      const keys = Object.keys(this.control.errors);
      if (keys.length !== 0) {
        const key = keys[0];
        return {
          [key]: this.control.errors[key]
        };
      }
    }

    return null;
  }
}
