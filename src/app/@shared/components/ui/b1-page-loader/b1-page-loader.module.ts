import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveComponentModule } from '@ngrx/component';

import { B1PageLoaderComponent } from './b1-page-loader.component';

@NgModule({
  declarations: [B1PageLoaderComponent],
  imports: [CommonModule, ReactiveComponentModule],
  exports: [B1PageLoaderComponent],
})
export class B1PageLoaderModule {}
