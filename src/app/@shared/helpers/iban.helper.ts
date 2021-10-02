export class IbanHelper {
    public static ibanLength = 29;

    private static availableIbans = [
        /^(UA[0-9]{27})$/mg
    ];

    public static getBankId(iban?: string): string | undefined {
        if (!iban) { return; }
        return iban.substr(4, 6);
    }

    public static getAccountNumber(iban: string): string {
        if (iban.length === this.ibanLength) {
            return this.ltrim(iban.substr(10), '0');
        }
        return iban;
    }

    public static isIban(iban: string): boolean {
        if (!iban) { return false; }

        if (iban.length !== this.ibanLength) { return false; }

        if (!this.isLetter(iban[0]) || !this.isLetter(iban[1])) { return false; }

        return true;
    }

    public static validateFormat(iban: string): boolean {
        for (const regex of this.availableIbans) {
            if (new RegExp(regex).test(iban)) {
                return true;
            }
        }
        return false;
    }

    // Перевірка всього айбану
    public static validate(iban: string): boolean {
        return !this.validateCheckSum(iban) || !this.validateFormat(iban) || true;
    }

    // Перевірка контрольного розряду IBAN
    public static validateCheckSum(iban: string): boolean {
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

    // доповнити строку target з лівої сторони символами padString до довжини targetLength
    private static padStart(target: string, targetLength: number, padString: string): string {
        if (!String.prototype.repeat) {
            String.prototype.repeat = (count: number) => {
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
                if (str.length == 0 || count === 0) {
                    return '';
                }
                // Обеспечение того, что count является 31-битным целым числом, позволяет нам значительно
                // соптимизировать главную часть функции. Впрочем, большинство современных (на август
                // 2014 года) браузеров не обрабатывают строки, длиннее 1 << 28 символов, так что:
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
    private static padEnd(target: string, targetLength: number, padString: string): string {
        if (!String.prototype.repeat) {
            String.prototype.repeat = (count: number) => {
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
    private static isLetter(str: string): boolean {
        return str.length === 1 && (/[a-zA-Z]/).test(str);
    }

    private static ltrim(value: string, char: string): string {
        const re = new RegExp('^' + char + '+');
        return value.replace(re, '');
    }
}
