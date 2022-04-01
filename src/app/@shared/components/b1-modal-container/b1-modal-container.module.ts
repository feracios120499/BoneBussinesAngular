import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { B1DirectivesModule } from '../../modules/b1-directives/b1-directives.module';

import { B1ModalContainerComponent } from './b1-modal-container.component';

@NgModule({
  declarations: [B1ModalContainerComponent],
  imports: [NgbModule, B1DirectivesModule],
  exports: [B1ModalContainerComponent],
})
export class B1ModalContainerModule {}
