import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { B1CardLoaderModule } from '@ui/b1-card-loader/b1-card-loader.module';
import { B1ContentWrapperModule } from '@containers/b1-content-wrapper/b1-content-wrapper.module';
import { B1IconModule } from '@directives/b1-icon/b1-icon.module';

import { InstructionsComponent } from './instructions.component';
import { InstructionsListComponent } from './components/instructions-list/instructions-list.component';
import { InstructionsHeaderComponent } from './components/instructions-header/instructions-header.component';

@NgModule({
  declarations: [
    InstructionsComponent,
    InstructionsListComponent,
    InstructionsHeaderComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    B1CardLoaderModule,
    B1ContentWrapperModule,
    B1IconModule,
    RouterModule.forChild([
      {
        path: '',
        component: InstructionsComponent,
      },
    ]),
  ],
})
export class InstructionsModule {}
