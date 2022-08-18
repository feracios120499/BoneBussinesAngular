import { Component, OnInit } from '@angular/core';
import { SupDocument } from '@models/sup-documents/sup-document.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { SupDocumentsActions } from '@store/sup-documents/actions';
import { SupDocumentDetailsSelectors } from '../../store/selectors';
import { SupdocumentEditModalComponent } from '../supdocument-edit-modal/supdocument-edit-modal.component';

@Component({
  selector: 'app-supdocument-details',
  templateUrl: './supdocument-details.component.html',
  styleUrls: ['./supdocument-details.component.scss'],
})
export class SupdocumentDetailsComponent implements OnInit {
  constructor(private store: Store, private modalService: NgbModal) {}

  supdocument$ = this.store.select(SupDocumentDetailsSelectors.currentSupdocument);
  isLoading$ = this.store.select(SupDocumentDetailsSelectors.isLoadingCurrentSupdocument);

  ngOnInit(): void {}

  editSupdocument(supdocument: SupDocument): void {
    const modalRef = this.modalService.open(SupdocumentEditModalComponent);
    modalRef.componentInstance.name = supdocument.fileName;
    modalRef.componentInstance.description = supdocument.description;
    modalRef.componentInstance.id = supdocument.id;
  }

  formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'kB', 'MB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  onSupdocumentDownload(supdocument: SupDocument): void {
    this.store.dispatch(SupDocumentsActions.downloadSupdocumentRequest(supdocument.id));
  }
}
