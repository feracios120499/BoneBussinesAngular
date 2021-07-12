import { Injectable } from '@angular/core';
import * as math from 'mathjs';
import { DatePipe } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class FilterService {

    constructor(public datepipe: DatePipe) {

    }
    getMoneyString(money: number): string {
        return math.divide(money, 100).toString();
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
