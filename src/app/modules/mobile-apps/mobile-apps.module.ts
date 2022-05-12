import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { QRCodeModule } from 'angularx-qrcode';
import { ReactiveComponentModule } from '@ngrx/component';

import { MobileAppsComponent } from './mobile-apps.component';
import { MobileAppsHeaderComponent } from './components/mobile-apps-header/mobile-apps-header.component';
import { MobileAppsListComponent } from './components/mobile-apps-list/mobile-apps-list.component';
import { MobileAppsItemComponent } from './components/mobile-apps-item/mobile-apps-item.component';

@NgModule({
  declarations: [MobileAppsComponent, MobileAppsHeaderComponent, MobileAppsListComponent, MobileAppsItemComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveComponentModule,
    QRCodeModule,
    RouterModule.forChild([
      {
        path: '',
        component: MobileAppsComponent,
      },
    ]),
  ],
})
export class MobileAppsModule {}
