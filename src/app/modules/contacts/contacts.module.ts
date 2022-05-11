import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveComponentModule } from '@ngrx/component';

import { B1ContentWrapperModule } from '@containers/b1-content-wrapper/b1-content-wrapper.module';
import { WebClassModule } from '@directives/web-class/web-class.module';

import { ContactsComponent } from './contacts.component';
import { ContactsHeaderComponent } from './components/contacts-header/contacts-header.component';
import { ContactsContainerComponent } from './components/contacts-container/contacts-container.component';
import { ContactsPhoneListComponent } from './components/contacts-phone-list/contacts-phone-list.component';

@NgModule({
  declarations: [ContactsComponent, ContactsHeaderComponent, ContactsContainerComponent, ContactsPhoneListComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    TranslateModule,
    B1ContentWrapperModule,
    WebClassModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactsComponent,
      },
    ]),
  ],
})
export class ContactsModule {}
