import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IbanDirective } from './directives/iban.directive';
import { B1IconDirective } from './directives/b1-icon.directive';



@NgModule({
  declarations: [
    IbanDirective,
    B1IconDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IbanDirective,
    B1IconDirective
  ]
})
export class B1DirectivesModule { }
