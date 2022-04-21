import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/@shared/shared.module';
import { B1ContentWrapperModule } from '@ui/b1-content-wrapper/b1-content-wrapper.module';
import { B1DropdownModule } from '@ui/b1-dropdown/b1-dropdown.module';
import { B1ModalContainerModule } from '@ui/b1-modal-container/b1-modal-container.module';
import { B1InputModule } from '@forms/b1-input/b1-input.module';
import { B1NumberInputModule } from '@forms/b1-number-input/b1-number-input.module';

import { CorrespondentsComponent } from './views/correspondents/correspondents.component';
import { CorrespondentsHeaderComponent } from './components/correspondents-header/correspondents-header.component';
import { CorrespondentsActionsComponent } from './components/correspondents-actions/correspondents-actions.component';
import { CorrespondentsListComponent } from './components/correspondents-list/correspondents-list.component';
import { CorrespondentItemComponent } from './components/correspondent-item/correspondent-item.component';
import { CorrespondentFormComponent } from './components/correspondent-form/correspondent-form.component';
import { CorrespondentModalComponent } from './components/correspondent-modal/correspondent-modal.component';

@NgModule({
  declarations: [
    CorrespondentsComponent,
    CorrespondentsHeaderComponent,
    CorrespondentsActionsComponent,
    CorrespondentsListComponent,
    CorrespondentItemComponent,
    CorrespondentFormComponent,
    CorrespondentModalComponent,
  ],
  imports: [
    SharedModule,
    B1ContentWrapperModule,
    B1DropdownModule,
    B1ModalContainerModule,
    B1InputModule,
    B1NumberInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: CorrespondentsComponent,
      },
    ]),
  ],
})
export class CorrespondentsModule {}
