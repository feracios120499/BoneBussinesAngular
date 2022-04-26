import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { B1IconModule } from '@directives/b1-icon/b1-icon.module';

import { B1PageButtonComponent } from './b1-page-button.component';

@NgModule({
  declarations: [B1PageButtonComponent],
  imports: [B1IconModule, NgbModule, TranslateModule],
  exports: [B1PageButtonComponent],
})
export class B1PageButtonModule {}
