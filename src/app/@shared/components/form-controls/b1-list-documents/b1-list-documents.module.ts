import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { B1IconModule } from '@directives/b1-icon/b1-icon.module';

import { B1ListDocumentsComponent } from './b1-list-documents.component';

@NgModule({
  declarations: [B1ListDocumentsComponent],
  imports: [CommonModule, NgbModule, B1IconModule],
  exports: [B1ListDocumentsComponent],
})
export class B1ListDocumentsModule {}
