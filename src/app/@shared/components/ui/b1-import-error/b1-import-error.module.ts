import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { B1ImportErrorComponent } from './b1-import-error.component';

@NgModule({
  declarations: [B1ImportErrorComponent],
  imports: [B1IconModule, NgbTooltipModule, CommonModule],
  exports: [B1ImportErrorComponent],
})
export class B1importErrorModule {}
