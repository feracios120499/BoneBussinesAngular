import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { MobileMoreModule } from '../../directives/mobile-more/mobile-more.module';
import { StopPropagationModule } from '../../directives/stop-propagation/stop-propagation.module';
import { B1DirectivesModule } from '../../modules/b1-directives/b1-directives.module';

import { B1DropdownComponent } from './b1-dropdown.component';

@NgModule({
  declarations: [B1DropdownComponent],
  imports: [
    CommonModule,
    NgbModule,
    TranslateModule,
    B1DirectivesModule,
    MobileMoreModule,
    StopPropagationModule,
  ],
  exports: [B1DropdownComponent],
})
export class B1DropdownModule {}
