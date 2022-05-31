import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragDropFileUploadDirective } from './drag-drop.directive';

@NgModule({
  declarations: [DragDropFileUploadDirective],
  imports: [CommonModule],
  exports: [DragDropFileUploadDirective],
})
export class DragDropFileUploadModule {}
