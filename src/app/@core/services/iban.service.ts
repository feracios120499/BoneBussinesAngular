import { Injectable } from '@angular/core';
import * as bigInt from 'big-integer';

@Injectable({
    providedIn: 'root'
})
export class IbanService {

    // Довжина IBAN
    IbanLength = 29;
    // Перевірка контрольного розряду IBAN
    validateChecksum(iban: string): boolean {
        if (!iban) { return false; }
        const asciiShift = 55;
        iban = iban.toUpperCase();

        if (!iban.match(/^[A-Z0-9]/i)) { return false; }

        iban = iban.replace(/ /g, '');
        const rearrangedIban = iban.substr(4, iban.length - 4) + iban.substr(0, 4);

        let checkSumString = '';
        for (let i = 0; i < rearrangedIban.length; i++) {
            const char = rearrangedIban[i];
            if (this.isLetter(char)) {
                checkSumString += rearrangedIban.charCodeAt(i) - asciiShift;
            } else {
                checkSumString += +char;
            }
        }

        let checksum = +checkSumString.substr(0, 1);
        for (let i = 1; i < checkSumString.length; i++) {
            checksum *= 10;
            checksum += +checkSumString.substr(i, 1);
            checksum %= 97;
        }
        return checksum === 1;
    }
    // Отримати МФО з IBAN
    getMfo(iban: string): string {
        return iban.substr(4, 6);
    }
    // Отримати номер рахунку з IBAN
    getNls(iban: string): string {
        if (iban.length > 14) {
            return this.ltrim(iban.substr(10), '0');
        }
        else {
            return iban;
        }
    }
    // Отримати IBAN по МФО та номеру рахунку
    // якщо padLeft істина то рахунок доповниться нулями з ліва, інакше з права (дефолтне значення істина)
    getIban(mfo: string, nls: string, padLeft = true, countryCode = 'UA'): string {
        if (padLeft) {
            nls = this.padStart(nls, 19, '0');
        }
        else {
            nls = this.padEnd(nls, 19, '0');
        }

        const ibanWithoutCheckDigit = countryCode + '00' + mfo + nls;
        const asciiShift = 55;

        let checkSumString = '';
        const rearrangedIban = ibanWithoutCheckDigit.substr(4, ibanWithoutCheckDigit.length - 4) + ibanWithoutCheckDigit.substr(0, 4);
        for (let i = 0; i < rearrangedIban.length; i++) {
            const char = rearrangedIban[i];
            if (this.isLetter(char)) {
                checkSumString += rearrangedIban.charCodeAt(i) - asciiShift;
            } else {
                checkSumString += +char;
            }
        }
        // var mod = bigInt(97);
        // var checkSum = bigInt(checkSumString);
        const checkDigit = (198 - parseInt(bigInt(checkSumString).mod(97).valueOf().toString(), 10)).toString().slice(-2);
        return countryCode + checkDigit + mfo + nls;
    }
    // Перевірка чи являється вказаний рахунок IBAN-ном
    isIban(nls: string): boolean {
        if (!nls) { return false; }
        if (nls.length !== this.IbanLength) { return false; }
        if (!this.isLetter(nls[0]) || !this.isLetter(nls[1])) { return false; }

        return true;
    }
    // Перевірка всього айбану
    validate(iban: string): boolean {
        if (!this.validateChecksum(iban)) {
            return false;
        }
        if (iban.substr(0, 2).toUpperCase() !== 'UA') {// если айбан проверяем что первые 2 символа UA
            return false;
        }
        for (let i = 2; i < iban.length; i++) {// если айбан проверяем что все последующии символы это цифры
            if (!('0123456789'.indexOf(iban[i]) < 0)) {
                return false;
            }
        }
        return true;
    }

    // доповнити строку target з лівої сторони символами padString до довжини targetLength
    private padStart(target: string, targetLength: number, padString: string): string {
        if (!String.prototype.repeat) {
            String.prototype.repeat = function (count: number): string {
                'use strict';
                if (this == null) {
                    throw new TypeError('can\'t convert ' + this + ' to object');
                }
                const str = '' + this;
                count = +count;
                if (count !== count) {
                    count = 0;
                }
                if (count < 0) {
                    throw new RangeError('repeat count must be non-negative');
                }
                if (count === Infinity) {
                    throw new RangeError('repeat count must be less than infinity');
                }
                count = Math.floor(count);
                if (str.length === 0 || count === 0) {
                    return '';
                }
                // Обеспечение того, что count является 31-битным целым числом, позволяет нам значительно
                // соптимизировать главную часть функции. Впрочем, большинство современных (на август
                // 2014 года) браузеров не обрабатывают строки, длиннее 1 << 28 символов, так что:
                // tslint:disable-next-line: no-bitwise
                if (str.length * count >= 1 << 28) {
                    throw new RangeError('repeat count must not overflow maximum string size');
                }
                let rpt = '';
                for (let i = 0; i < count; i++) {
                    rpt += str;
                }
                return rpt;
            };
        }
        // tslint:disable-next-line: no-bitwise
        targetLength = targetLength >> 0;
        padString = String(padString || ' ');
        if (target.length > targetLength) {
            return String(target);
        } else {
            targetLength = targetLength - target.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length);
            }
            return padString.slice(0, targetLength) + String(target);
        }
    }

    // доповнити строку target з правої сторони символами padString до довжини targetLength
    private padEnd(target: string, targetLength: number, padString: string): string {
        if (!String.prototype.repeat) {
            String.prototype.repeat = function (count: number): string {
                'use strict';
                if (this == null) {
                    throw new TypeError('can\'t convert ' + this + ' to object');
                }
                const str = '' + this;
                count = +count;
                if (count !== count) {
                    count = 0;
                }
                if (count < 0) {
                    throw new RangeError('repeat count must be non-negative');
                }
                if (count === Infinity) {
                    throw new RangeError('repeat count must be less than infinity');
                }
                count = Math.floor(count);
                if (str.length === 0 || count === 0) {
                    return '';
                }
                // Обеспечение того, что count является 31-битным целым числом, позволяет нам значительно
                // соптимизировать главную часть функции. Впрочем, большинство современных (на август
                // 2014 года) браузеров не обрабатывают строки, длиннее 1 << 28 символов, так что:
                // tslint:disable-next-line: no-bitwise
                if (str.length * count >= 1 << 28) {
                    throw new RangeError('repeat count must not overflow maximum string size');
                }
                let rpt = '';
                for (let i = 0; i < count; i++) {
                    rpt += str;
                }
                return rpt;
            };
        }
        // tslint:disable-next-line: no-bitwise
        targetLength = targetLength >> 0;
        padString = String(typeof padString !== 'undefined' ? padString : ' ');
        if (target.length > targetLength) {
            return String(target);
        } else {
            targetLength = targetLength - target.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length);
            }
            return String(target) + padString.slice(0, targetLength);
        }
    }

    // функція перевірки чи є str строкою з 1ного символу
    private isLetter(str: string): boolean {
        return str.length === 1 && (str.match(/[a-z]/i)?.length || -1) >= 0;
    }

    private ltrim(value: string, char: string): string {
        const re = new RegExp('^' + char + '+');
        return value.replace(re, '');
    }
}
