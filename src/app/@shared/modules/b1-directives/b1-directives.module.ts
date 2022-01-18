import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IbanDirective } from './directives/iban.directive';
import { B1IconDirective } from './directives/b1-icon.directive';
import { CheckValueInputDirective } from './directives/check-value.directive';
import { NgSelectScrollDirective } from './directives/ng-select-scroll.directive';
import { DecimalNumbersDirective } from './directives/decimal-numbers.directive';


@NgModule({
  declarations: [
    IbanDirective,
    B1IconDirective,
    CheckValueInputDirective,
    NgSelectScrollDirective,
    DecimalNumbersDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IbanDirective,
    B1IconDirective,
    CheckValueInputDirective,
    NgSelectScrollDirective,
    DecimalNumbersDirective
  ]
})
export class B1DirectivesModule { }
