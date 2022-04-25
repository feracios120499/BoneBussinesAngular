import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cardNumber' })
export class CardNumberPipe implements PipeTransform {
  transform(cardNumber: string) {
    var formatNumber = '';
    for (let i = 0; i < 4; i++) {
      formatNumber += this.getPart(cardNumber, i);
    }
    console.log(formatNumber);
    return formatNumber;
  }

  getPart(cardNumber: string, partNumber: number) {
    return `<span>${cardNumber.substr(partNumber, 4)}</span>`;
  }
}
