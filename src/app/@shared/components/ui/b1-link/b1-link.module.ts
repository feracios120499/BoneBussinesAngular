import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { B1IconModule } from '@directives/b1-icon/b1-icon.module';

import { B1LinkComponent } from './b1-link.component';

@NgModule({
  declarations: [B1LinkComponent],
  imports: [B1IconModule, RouterModule],
  exports: [B1LinkComponent],
})
export class B1LinkModule {}
