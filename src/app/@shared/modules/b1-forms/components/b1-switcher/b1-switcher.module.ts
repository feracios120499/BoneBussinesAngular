import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { B1SwitcherComponent } from './b1-switcher.component';

@NgModule({
  declarations: [B1SwitcherComponent],
  imports: [TranslateModule, FormsModule],
  exports: [B1SwitcherComponent],
})
export class B1SwitcherModule {}
