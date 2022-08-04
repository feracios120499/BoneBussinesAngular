import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupdocumentsComponent } from './supdocuments.component';
import { SupdocumentsListComponent } from './components/supdocuments-list/supdocuments-list.component';
import { RouterModule } from '@angular/router';
import { B1ContentWrapperModule } from '@containers/b1-content-wrapper/b1-content-wrapper.module';



@NgModule({
  declarations: [
    SupdocumentsComponent,
    SupdocumentsListComponent
  ],
  imports: [
    CommonModule,
    B1ContentWrapperModule,

    RouterModule.forChild([
      {
        path: '',
        component: SupdocumentsComponent,
      },
    ]),
  ]
})
export class SupdocumentsModule { }
