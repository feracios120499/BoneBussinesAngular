import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { BaseB1ModalComponent } from '@modals/base-b1-modal.component';
import { PublicSelectors } from '@store/public/selectors';
import { FeedbackModalConfig } from '@models/modals/feedback-modal.config';
import { FeedbackModalResult } from '@models/modals/feedback-modal.result';
import {
  B1FeedbackRatingFormComponent,
  FeedbackRatingForm,
} from '../b1-feedback-rating-form/b1-feedback-rating-form.component';
import {
  B1FeedbackContactsFormComponent,
  FeedbackContactsForm,
} from '../b1-feedback-contacts-form/b1-feedback-contacts-form.component';

@Component({
  selector: 'b1-feedback-modal',
  templateUrl: './b1-feedback-modal.component.html',
  styleUrls: ['./b1-feedback-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B1FeedbackModalComponent extends BaseB1ModalComponent<FeedbackModalResult> implements OnInit {
  @Input() config!: FeedbackModalConfig;
  isLoading$: Observable<boolean> = this.store.select(PublicSelectors.isLoadingFeedbackSend);
  ratingForm!: FeedbackRatingForm;
  contactToMe = false;
  initialContactsForm: Readonly<FeedbackContactsForm> = {
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    EDRPOU: '', // eslint-disable-line @typescript-eslint/naming-convention
    nameOrganization: '',
    region: '',
  };
  contactsForm!: FeedbackContactsForm;
  result!: FeedbackModalResult;

  @ViewChild('ratingFormRef') ratingFormRef!: B1FeedbackRatingFormComponent;
  @ViewChild('contactsFormRef') contactsFormRef!: B1FeedbackContactsFormComponent;

  constructor(private store: Store) {
    super();
  }

  onSend(): void {
    if (!this.ratingFormRef.submitForm() || !this.contactsFormRef.submitForm()) {
      return;
    }
    this.result = { ...this.ratingForm, contactToMe: this.contactToMe, ...this.contactsForm };
    this.ok();
  }
}
