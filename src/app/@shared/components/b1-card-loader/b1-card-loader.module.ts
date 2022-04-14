import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';

import { B1CardLoaderComponent } from './b1-card-loader.component';

@NgModule({
  declarations: [B1CardLoaderComponent],
  imports: [ReactiveComponentModule],
  exports: [B1CardLoaderComponent],
})
export class B1CardLoaderModule {}
