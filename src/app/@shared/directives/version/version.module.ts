import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';

import { B1IconModule } from '@directives/b1-icon/b1-icon.module';
import { StopPropagationModule } from '@directives/stop-propagation/stop-propagation.module';

import { VersionDirective } from './version.directive';
import { VersionWindowComponent } from './version-window/version-window.component';

@NgModule({
  declarations: [VersionDirective, VersionWindowComponent],
  imports: [CommonModule, ReactiveComponentModule, TranslateModule, B1IconModule, StopPropagationModule],
  exports: [VersionDirective],
})
export class VersionModule {}
