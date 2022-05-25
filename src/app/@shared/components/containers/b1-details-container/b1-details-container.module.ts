import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { B1DetailsContainerComponent } from './b1-details-container.component';
import { B1DetailsCellComponent } from './b1-details-cell/b1-details-cell.component';

@NgModule({
  declarations: [B1DetailsContainerComponent, B1DetailsCellComponent],
  imports: [TranslateModule],
  exports: [B1DetailsContainerComponent, B1DetailsCellComponent],
})
export class B1DetailsContainerModule {}
