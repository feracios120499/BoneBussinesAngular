import { Component, forwardRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PaymentSupDoc } from '@models/payments/payment-sup-doc.model';
import { SupDocument } from '@models/sup-documents/sup-document.model';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { ModalService } from '@services/modal.service';
import { SupDocumentsSelectors } from '@store/sup-documents/selectors';
import { combineLatest, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'b1-sup-documents',
  templateUrl: './b1-sup-documents.component.html',
  styleUrls: ['./b1-sup-documents.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B1SupDocumentsComponent),
      multi: true,
    },
  ],
})
export class B1SupDocumentsComponent implements OnInit, ControlValueAccessor {
  constructor(private store: Store, private modalService: ModalService) {}

  maxCountDocuments = 3;

  @ViewChild('templateref') public templateref!: TemplateRef<any>;

  private selectValueChange: Subject<PaymentSupDoc[]> = new Subject<PaymentSupDoc[]>();
  private modalRef?: NgbModalRef;

  selectedDocuments: PaymentSupDoc[] = [];
  documents$ = this.store.select(SupDocumentsSelectors.signedDocuments);

  selectedInModal: SupDocument[] = [];

  writeValue(obj: PaymentSupDoc[]): void {
    this.selectValueChange.next(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private onChange = (value: PaymentSupDoc[]) => {};

  private onTouched = () => {};

  private setSelectedDocuments(documents: PaymentSupDoc[]): void {
    setTimeout(() => {
      this.selectedDocuments = documents;
      this.onChange(documents);
    });
  }

  ngOnInit(): void {
    const change$ = combineLatest([this.documents$, this.selectValueChange]);

    change$
      .pipe(filter(([documents, selected]) => !!documents && documents.length > 0 && !!selected))
      .subscribe(([documents, selected]) => {
        const selectedDocuments = selected.filter((p) => documents.some((d) => d.id === p.supDoc.id));
        this.setSelectedDocuments(selectedDocuments);
      });
  }
  openModal(): void {
    this.selectedInModal = this.selectedDocuments.map((p) => p.supDoc);
    this.modalRef = this.modalService.open(this.templateref);
  }

  isSelected(document: SupDocument): boolean {
    return this.selectedInModal.includes(document);
  }

  delete(document: PaymentSupDoc): void {
    this.setSelectedDocuments(this.selectedDocuments.filter((p) => p !== document));
  }

  clickOnDocument(document: SupDocument): void {
    if (this.isSelected(document)) {
      this.selectedInModal = this.selectedInModal.filter((p) => p !== document);
    } else if (this.selectedInModal.length < this.maxCountDocuments) {
      this.selectedInModal.push(document);
    }
  }

  save(): void {
    const selectedDocuments = this.selectedInModal.map((p) => {
      const payDocument: PaymentSupDoc = {
        supDoc: p,
      };
      return payDocument;
    });
    this.setSelectedDocuments(selectedDocuments);
    this.modalRef?.close();
  }
}
