import { Injectable } from '@angular/core';
import { UserEditModalComponent } from '@modules/users/components/user-edit-modal/user-edit-modal.component';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: NgbModalRef[] = [];
  constructor(private modalService: NgbModal) {
    this.modalService.activeInstances.asObservable().subscribe((modals) => {
      this.modals = modals;
    });
  }

  open(content: any, options?: NgbModalOptions | undefined): NgbModalRef {
    if (!document.body.classList.contains('modal-open')) {
      const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      document.body.style.top = offset * -1 + 'px';

      const modalRef = this.modalService.open(content, options);
      console.log(modalRef.componentInstance);
      modalRef.result.then(
        () => {
          window.scrollTo(0, offset);
          document.body.style.top = 'auto';
        },
        () => {
          window.scrollTo(0, offset);
          document.body.style.top = 'auto';
        }
      );

      return modalRef;
    }
    return this.modalService.open(content, options);
  }

  close(content: any): void {
    const modal = this.modals.find((p) => p.componentInstance instanceof content);
    if (modal) {
      modal.close();
    }
  }
}
