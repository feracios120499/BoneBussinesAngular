import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiftRoutingModule } from './swift-routing.module';
import { SwiftComponent } from './swift.component';
import { SwiftFormModule } from '@payment-forms/swift-form/swift-form.module';

@NgModule({
  declarations: [SwiftComponent],
  imports: [CommonModule, SwiftRoutingModule, SwiftFormModule],
})
export class SwiftModule {}
