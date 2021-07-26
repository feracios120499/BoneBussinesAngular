import { AfterViewInit, Directive, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { bankSelector } from '@selectors/public.selectors';
import { IbanService } from '@services/iban.service';
import { Observable } from 'rxjs';
import { BankModel } from '../models/bank.model';


@Directive({
    selector: '[iban]'
})
export class IbanDirective implements OnChanges {

    @Input() iban!: string;

    constructor(private elementRef: ElementRef, private ibanService: IbanService) {

    }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes.iban.currentValue !== changes.iban.previousValue && this.ibanService.isIban(this.iban)) {
            const countryCode = this.iban.substring(0, 2);
            const mfo = this.ibanService.getMfo(this.iban);
            const checkNumbers = this.iban.substring(2, 4);
            const accountNumber = this.ibanService.getNls(this.iban);

            let zeros = '';
            while (
                (
                    countryCode.length +
                    mfo.length +
                    checkNumbers.length +
                    zeros.length +
                    accountNumber.length
                ) !== this.ibanService.IbanLength) {
                zeros += '0';
            }
            let html = `<span style='opacity:0.6'>${countryCode}</span>`;
            html += `<span style='opacity:0.6'>${checkNumbers}</span>`;
            html += `<span style=''>${mfo}</span>`;
            html += `<span style='opacity:0.6'>${zeros}</span>`;
            html += `<span style=''>${accountNumber}</span>`;
            this.elementRef.nativeElement.innerHTML = html;
        }
    }
}
