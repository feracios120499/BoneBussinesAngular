import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FilterService {

    constructor(public datepipe: DatePipe) {

    }
    getMoneyString(money: number): string {
        return (money / 100).toFixed(2);
    }

    pushValue(values: string[], value: any): void {
        if (!!value) {
            values.push(value.toString().toUpperCase());
        }
    }

    pushDateValue(values: string[], value?: Date): void {
        if (!!value) {
            values.push((this.datepipe.transform(value as Date, 'dd.MM.yyyy') as string).toString().toUpperCase());
        }
    }

    pushMoneyValue(values: string[], value?: number): void {
        if (!!value) {
            values.push(this.getMoneyString(value).toUpperCase());
        }
    }
}
