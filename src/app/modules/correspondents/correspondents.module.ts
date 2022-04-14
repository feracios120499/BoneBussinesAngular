import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/@shared/shared.module';
import { B1ContentWrapperModule } from '@ui/b1-content-wrapper/b1-content-wrapper.module';

import { CorrespondentsComponent } from './views/correspondents/correspondents.component';
import { CorrespondentsHeaderComponent } from './components/correspondents-header/correspondents-header.component';
import { CorrespondentsActionsComponent } from './components/correspondents-actions/correspondents-actions.component';
import { CorrespondentsListComponent } from './components/correspondents-list/correspondents-list.component';
import { CorrespondentItemComponent } from './components/correspondent-item/correspondent-item.component';

@NgModule({
  declarations: [
    CorrespondentsComponent,
    CorrespondentsHeaderComponent,
    CorrespondentsActionsComponent,
    CorrespondentsListComponent,
    CorrespondentItemComponent,
  ],
  imports: [
    SharedModule,
    B1ContentWrapperModule,
    RouterModule.forChild([
      {
        path: '',
        component: CorrespondentsComponent,
      },
    ]),
  ],
})
export class CorrespondentsModule {}
