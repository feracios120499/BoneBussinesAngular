import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';

import { B1GlobalLoaderComponent } from './b1-global-loader.component';

@NgModule({
  declarations: [B1GlobalLoaderComponent],
  imports: [ReactiveComponentModule],
  exports: [B1GlobalLoaderComponent],
})
export class B1GlobalLoaderModule {}
