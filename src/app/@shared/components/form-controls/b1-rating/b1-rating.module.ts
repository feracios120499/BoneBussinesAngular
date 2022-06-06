import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { B1RatingComponent } from './b1-rating.component';

@NgModule({
  declarations: [B1RatingComponent],
  imports: [NgbModule, ReactiveFormsModule, TranslateModule],
  exports: [B1RatingComponent],
})
export class B1RatingModule {}
