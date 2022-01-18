import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    constructor(private modalService: NgbModal) {

    }

    open(content: any, options?: NgbModalOptions | undefined): NgbModalRef {
        if (!document.body.classList.contains('modal-open')) {
            const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            document.body.style.top = (offset * -1) + 'px';

            const modalRef = this.modalService.open(content, options);
            modalRef.result.then(
                () => {
                    window.scrollTo(0, offset);
                    document.body.style.top = 'auto';
                },
                () => {
                    window.scrollTo(0, offset);
                    document.body.style.top = 'auto';
                });


            return modalRef;
        }
        return this.modalService.open(content, options);
    }
}
