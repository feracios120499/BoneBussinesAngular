import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResizeService } from '@services/resize.service';
import { AcctActions } from '@store/acct/actions';
import { AcctDetailsActions } from '@store/acct/details/actions';
import { AcctDetailsSelectors } from '@store/acct/details/selectors';
import { AppSelectors } from '@store/app/selectors';
import { rangeValueConverter } from '@store/shared';
import dayjs from 'dayjs';

@Component({
  selector: 'account-turnovers-header',
  templateUrl: './account-turnovers-header.component.html',
  styleUrls: ['./account-turnovers-header.component.scss']
})
export class AccountTurnoversHeaderComponent implements OnInit {

  constructor(private store: Store, private resizeService: ResizeService) { }

  form$ = this.store.select(AcctDetailsSelectors.filterTransactions);
  isLoading$ = this.store.select(AcctDetailsSelectors.isLoadingDetailsPage);
  isMobile$ = this.resizeService.isMobile$;
  public selected: any;
  public rangeValueConverter = rangeValueConverter;
  ranges: any = {
    'shared.picker.today': [dayjs(), dayjs()],
    'shared.picker.currentMonth': [dayjs().startOf('month'), dayjs()],
    'shared.picker.month1': [dayjs().subtract(1, 'month'), dayjs()],
    'shared.picker.month2': [dayjs().subtract(2, 'month'), dayjs()],
    'shared.picker.month3': [dayjs().subtract(3, 'month'), dayjs()],
  };

  ngOnInit(): void {
  }

  showStatement(): void {
    this.store.dispatch(AcctDetailsActions.showStatement());
  }

  showRequisites(): void {
    this.store.dispatch(AcctDetailsActions.showRequisitesModal());
  }

  showExport(): void {
    this.store.dispatch(AcctDetailsActions.showExportModal());
  }
}
