import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { B1CardNumberModule } from '@ui/b1-card-number/b1-card-number.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';

import { CardStyledComponent } from './card-styled.component';

@NgModule({
  declarations: [CardStyledComponent],
  imports: [
    CommonModule,
    NgbModule,
    TranslateModule,
    B1CardNumberModule,
    B1IconModule,
  ],
  exports: [CardStyledComponent],
})
export class CardStyledModule {}
