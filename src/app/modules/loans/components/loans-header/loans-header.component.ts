import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-loans-header',
  templateUrl: './loans-header.component.html',
  styleUrls: ['./loans-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoansHeaderComponent {
  links = [
    { url: 'loans', label: 'components.loan.loans' },
    { url: 'overdrafts', label: 'components.loan.overdrafts' },
  ];
}
