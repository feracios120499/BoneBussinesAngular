import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';

import { B1ModalContainerComponent } from './b1-modal-container.component';

@NgModule({
  declarations: [B1ModalContainerComponent],
  imports: [CommonModule, NgbModule, B1IconModule, B1CardLoaderModule],
  exports: [B1ModalContainerComponent],
})
export class B1ModalContainerModule {}
