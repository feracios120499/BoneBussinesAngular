import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { DragDropFileUploadModule } from '@directives/drag-drop/drg-drop.module';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { B1DragDropFilesComponent } from './b1-drag-drop-files.component';

@NgModule({
  declarations: [B1DragDropFilesComponent],
  imports: [CommonModule, B1IconModule, FormsModule, NgScrollbarModule, DragDropFileUploadModule],
  exports: [B1DragDropFilesComponent],
})
export class B1DragDropFilesModule {}
