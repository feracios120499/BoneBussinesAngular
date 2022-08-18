import { Component, Input, OnInit } from '@angular/core';
import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { UiSupDocumentListItem } from '@models/sup-documents/sup-document.model';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { NotifyActions } from '@store/notify/actions';
import { SharedActions } from '@store/shared/actions';
import { SupDocumentsActions } from '@store/sup-documents/actions';

@Component({
  selector: 'app-supdocument-item',
  templateUrl: './supdocument-item.component.html',
  styleUrls: ['./supdocument-item.component.scss'],
})
export class SupdocumentItemComponent extends withRequiredPropsCheck() implements OnInit {
  @Input() supdocument!: UiSupDocumentListItem;

  getName(): string {
    if (this.supdocument) {
      return this.supdocument.fileName;
    }
    return '';
  }

  constructor(private store: Store, private translateService: TranslateService) {
    super();
  }
  ifSigned(): boolean {
    if (this.supdocument.status == 'SIGNED') {
      return true;
    } else {
      return false;
    }
  }
  ngOnInit(): void {
    this.checkRequiredProps(['supdocument']);
  }

  formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'kB', 'MB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  onSupdocumentDelete(): void {
    this.store.dispatch(
      SharedActions.showConfirm({
        config: {
          text: `${this.translateService
            .instant('components.supDocuments.areYouSureToDeleteSupDocuments')
            .replace('{0}', 1)}`,
          callback: () => this.store.dispatch(SupDocumentsActions.deleteSupdocumentRequest([this.supdocument.id])),
        },
      })
    );
  }

  onSupdocumentDownload(): void {
    this.store.dispatch(SupDocumentsActions.downloadSupdocumentRequest(this.supdocument.id));
    NotifyActions.successNotification({
      message: this.translateService.instant('components.supDocuments.successAddingSupDocument'),
    });
  }
  onSupdocumentDetails(): void {
    this.store.dispatch(SupDocumentsActions.goToDetail({ supdocument: this.supdocument }));
  }
  onSupdocumentSign(): void {}
}
