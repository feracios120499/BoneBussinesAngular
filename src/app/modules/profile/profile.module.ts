import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileDataComponent } from './components/profile-data/profile-data.component';
import { ProfileSecurityComponent } from './components/profile-security/profile-security.component';
import { ProfileDevicesComponent } from './components/profile-devices/profile-devices.component';
import { TranslateModule } from '@ngx-translate/core';
import { B1PageSeparatorModule } from '@ui/b1-page-separator/b1-page-separator.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [ProfileComponent, ProfileDataComponent, ProfileSecurityComponent, ProfileDevicesComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    TranslateModule,
    B1PageSeparatorModule,
    B1IconModule,
    ReactiveComponentModule,
  ],
})
export class ProfileModule {}
