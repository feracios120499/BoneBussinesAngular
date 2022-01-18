import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyPipe } from './pipes/money.pipe';
import { FirstTitlePipe } from './pipes/first-title.pipe';


@NgModule({
  declarations: [
    MoneyPipe,
    FirstTitlePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MoneyPipe,
    FirstTitlePipe
  ]
})
export class B1PipesModule { }
