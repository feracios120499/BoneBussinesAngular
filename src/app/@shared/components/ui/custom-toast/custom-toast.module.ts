import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { CustomToast } from './custom-toast.component';

@NgModule({
  declarations: [CustomToast],
  imports: [TranslateModule, CommonModule],
  exports: [CustomToast],
})
export class CustomToastModule {}
