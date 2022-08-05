import { NgModule } from '@angular/core';
import { SupdocumentsFilterPipe } from './supdocuments-filter.pipe';


@NgModule({
  declarations: [SupdocumentsFilterPipe],
  exports: [SupdocumentsFilterPipe]
})
export class SupdocumentsFilterModule { }
