import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { HistoryModalConfig } from '@models/history-modal-config.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ResizeService } from '@services/resize.service';

@Component({
  selector: 'app-b1-history-modal',
  templateUrl: './b1-history-modal.component.html',
  styleUrls: ['./b1-history-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B1HistoryModalComponent implements OnInit {
  constructor(public modal: NgbActiveModal, private resizeService: ResizeService) {}
  @Input() config!: HistoryModalConfig;
  isMobile$ = this.resizeService.isMobile$;
  ngOnInit(): void {
    this.config.history = this.config.history.sort((a, b) => b.id - a.id);
  }

  getCss(statusId: string): string {
    switch (statusId) {
      case 'NEW':
        return 'info';
      case 'ONSIGN':
        return 'primary-300';
      case 'SIGNED':
        return 'primary-100';
      case 'BANKSEND':
        return 'secondary-100';
      case 'BANKRECEIVED':
        return 'secondary-300';
      case 'BANKPAID':
        return 'success';
      case 'BANKERROR':
        return 'error';
    }
    return 'info';
  }
}
