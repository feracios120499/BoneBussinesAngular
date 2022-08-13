import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UiSupDocumentListItem } from '@models/sup-documents/sup-document.model';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { NotifyActions } from '@store/notify/actions';
import { SharedActions } from '@store/shared/actions';
import { SupDocumentsActions } from '@store/sup-documents/actions';
import { SupDocumentsSelectors } from '@store/sup-documents/selectors';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-supdocuments-actions',
  templateUrl: './supdocuments-actions.component.html',
  styleUrls: ['./supdocuments-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupdocumentsActionsComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(SupDocumentsSelectors.isLoading);
  supdocuments$: Observable<UiSupDocumentListItem[]> = this.store.select(SupDocumentsSelectors.documents);
  filterTerm$: Observable<string> = this.store.select(SupDocumentsSelectors.filterTerm);

  constructor(private store: Store, private translateService: TranslateService) { }

  onSupdocumentAdd(): void {
    this.store.dispatch(SupDocumentsActions.showSupdocumentModal());
  }

  onSupdocumentDelete(supdocuments: UiSupDocumentListItem[]): void {
    this.executer(
      supdocuments,
      'shared.selectDocumentsBeforeRemove',
      (selected) => this.store.dispatch(SupDocumentsActions.deleteSupdocumentRequest(selected)),
      'components.supDocuments.areYouSureToDeleteSupDocuments'
    );
  }
  onSupdocumentSend(supdocuments: UiSupDocumentListItem[]): void {
    this.executerSend(
      supdocuments,
      'shared.selectDocumentsBeforeSendToBank',
      () => this.store.dispatch(SupDocumentsActions.showSupdocumentSendModal())
    );
  }

  onSupdocumentsFilter(term: string): void {
    this.store.dispatch(SupDocumentsActions.filterSupdocuments({ term }));
  }
  ngOnInit(): void {
  }
  private executer(
    supdocuments: UiSupDocumentListItem[],
    selectNotificationTranslate: string,
    func: (selected: string[]) => void,
    confirmTranslate?: string,
  ): void {
    const selected = supdocuments.filter((s) => s.selected).map((s) => s.id);

    if (selected.length === 0) {
      this.store.dispatch(
        NotifyActions.warningNotification({
          message: this.translateService.instant(selectNotificationTranslate),
        })
      );
    }
    // else if (checkSigned) {
    //   const selected2 = supdocuments.filter((s) => s.selected);
    //   let ifSigned: boolean = true;
    //   for (const s of selected2) {
    //     if (s.status != 'SIGNED') {
    //       console.log(s.status);
    //       ifSigned = false;
    //       break;
    //     }
    //   }
    //   if (!ifSigned) {
    //     this.store.dispatch(
    //       NotifyActions.warningNotification({
    //         message: this.translateService.instant(selectNotificationTranslate),
    //       })
    //     );
    //   }
    // }
    else {
      if (confirmTranslate) {
        this.store.dispatch(
          SharedActions.showConfirm({
            config: {
              text: this.translateService.instant(confirmTranslate).replace('{0}', selected.length),
              callback: () => func(selected),
            },
          })
        );
      } else {
        func(selected);
      }
    }
  }

  private executerSend(
    supdocuments: UiSupDocumentListItem[],
    selectNotificationTranslate: string,
    func: (selectedIds: string[]) => void,
  ): void {
    const selectedIds = supdocuments.filter((s) => s.selected).map((s) => s.id);
    const selected = supdocuments.filter((s) => s.selected);
    let ifSigned: boolean = true;

    for (const s of selected) {
      if (s.status != 'SIGNED') {
        console.log(s.status);
        ifSigned = false;
        break;
      }
    }

    if (selectedIds.length === 0) {
      this.store.dispatch(
        NotifyActions.warningNotification({
          message: this.translateService.instant(selectNotificationTranslate),
        })
      );
    }
    else {
        if (!ifSigned) {
          this.store.dispatch(
            NotifyActions.warningNotification({
              message: this.translateService.instant(selectNotificationTranslate),
            })
          );
      }
      else {
          func(selectedIds);
        }
      }
    }
  }


