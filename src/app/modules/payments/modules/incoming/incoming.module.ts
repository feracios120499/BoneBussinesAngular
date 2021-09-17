import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomingRoutingModule } from './incoming-routing.module';
import { IncomingComponent } from './incoming.component';


@NgModule({
  declarations: [
    IncomingComponent
  ],
  imports: [
    CommonModule,
    IncomingRoutingModule
  ]
})
export class IncomingModule { }
