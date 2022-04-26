import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { CustomToast } from './custom-toast.component';

@NgModule({
  declarations: [CustomToast],
  imports: [TranslateModule],
  exports: [CustomToast],
})
export class CustomToastModule {}
