import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { B1SwitcherModule } from '../b1-switcher/b1-switcher.module';

import { B1SwitcherListComponent } from './b1-switcher-list.component';

@NgModule({
  declarations: [B1SwitcherListComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    B1SwitcherModule,
  ],
  exports: [B1SwitcherListComponent],
})
export class B1SwitcherListModule {}
