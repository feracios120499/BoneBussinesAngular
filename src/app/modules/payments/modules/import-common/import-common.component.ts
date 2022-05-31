import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PayImportCommonActions } from './store/actions';
import { payImportCommonReducer } from './store/reducer';
import { PayImportCommonSelectors } from './store/selectors';
import { PAY_IMPORT_COMMON_KEY } from './store/store';
import { Location } from '@angular/common';
import { ImportResponse } from '@modules/payments/models/import-response.model';
import { RouteActions } from '@store/route/actions';

@Component({
  selector: 'app-import-common',
  templateUrl: './import-common.component.html',
  styleUrls: ['./import-common.component.scss'],
})
export class ImportCommonComponent implements OnInit, OnDestroy {
  constructor(private store: Store, private location: Location) {}

  isLoading$ = this.store.select(PayImportCommonSelectors.isLoading);
  ngOnInit(): void {
    this.store.addReducer(PAY_IMPORT_COMMON_KEY, payImportCommonReducer);
    this.store.dispatch(PayImportCommonActions.init());
    const response = this.location.getState();
    console.log(response);
    if ((response as any).responseExcel) {
      this.store.dispatch(PayImportCommonActions.setResponse({ response: response as ImportResponse }));
    } else {
      this.store.dispatch(RouteActions.routeTo({ route: '/payments/list' }));
    }
  }

  ngOnDestroy(): void {}
}
