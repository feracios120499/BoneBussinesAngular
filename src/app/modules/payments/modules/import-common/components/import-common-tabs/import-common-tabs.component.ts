import { Component, OnInit } from '@angular/core';
import { ImportStatus } from '@modules/payments/models/import-status.type';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { PayImportCommonActions } from '../../store/actions';
import { PayImportCommonSelectors } from '../../store/selectors';

@Component({
  selector: 'app-import-common-tabs',
  templateUrl: './import-common-tabs.component.html',
  styleUrls: ['./import-common-tabs.component.scss'],
})
export class ImportCommonTabsComponent implements OnInit {
  constructor(private store: Store) {}

  tabs = [
    {
      status: 'SUCCESS',
      label: 'components.salary.registry.import.successfull',
      badgeClass: 'b1-page-badge__success',
    },
    {
      status: 'ERROR',
      label: 'components.salary.registry.import.withError',
      badgeClass: 'b1-page-badge__error',
    },
    {
      status: 'EXIST',
      label: 'components.salary.registry.import.dublicates',
    },
  ];
  count$ = this.store.select(PayImportCommonSelectors.count);
  tab$ = this.store
    .select(PayImportCommonSelectors.currentTab)
    .pipe(map((currentTab) => this.tabs.find((p) => p.status === currentTab)));

  setTab(tab: string): void {
    this.store.dispatch(PayImportCommonActions.setTab({ tab: tab as unknown as ImportStatus }));
  }
  ngOnInit(): void {}
}
