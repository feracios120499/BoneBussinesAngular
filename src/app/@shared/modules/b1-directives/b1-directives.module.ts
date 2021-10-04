import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IbanDirective } from './directives/iban.directive';
import { B1IconDirective } from './directives/b1-icon.directive';
import { CheckValueInputDirective } from './directives/check-value.directive';
import { NgSelectScrollDirective } from './directives/ng-select-scroll.directive';



@NgModule({
  declarations: [
    IbanDirective,
    B1IconDirective,
    CheckValueInputDirective,
    NgSelectScrollDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IbanDirective,
    B1IconDirective,
    CheckValueInputDirective,
    NgSelectScrollDirective
  ]
})
export class B1DirectivesModule { }
