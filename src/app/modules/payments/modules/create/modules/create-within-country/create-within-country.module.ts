import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { CreateWithinCountryComponent } from './create-within-country.component';


@NgModule({
  declarations: [
    CreateWithinCountryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CreateWithinCountryModule { }
