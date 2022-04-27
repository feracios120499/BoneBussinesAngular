import { NgModule } from '@angular/core';

import { CheckRoleDirective } from './check-role.directive';

@NgModule({
  declarations: [CheckRoleDirective],
  exports: [CheckRoleDirective],
})
export class CheckRoleModule {}
