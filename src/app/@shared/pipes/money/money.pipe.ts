import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'money' })
export class MoneyPipe implements PipeTransform {
  transform(amount?: number, currencyCode?: string): string {
    if (!amount && currencyCode) return this.getCurrencySymbol(currencyCode);
    const money = amount || 0;
    let c = 2; // rounding of the fractional part to 100 (0,00)
    const d = ',';
    const t = ' ';
    let n = money;
    c = isNaN((c = Math.abs(c))) ? 2 : c;
    const s = n < 0 ? '-' : '';
    n = parseFloat(Math.abs(n || 0).toFixed(c));
    const i: any = String(parseInt(n.toString()));
    let j;
    j = (j = i.length) > 3 ? j % 3 : 0;
    return (
      s +
      (j ? i.substr(0, j) + t : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
      (c
        ? d +
          Math.abs(n - i)
            .toFixed(c)
            .slice(2)
        : '') +
      this.getCurrencySymbol(currencyCode)
    );
  }

  getCurrencySymbol(code: string | undefined): string {
    if (!!code) {
      switch (code.toUpperCase()) {
        case 'EUR': // Euro
          return '€';

        case 'USD': // Dólar americano
        case 'MXN': // Peso mejicano
        case 'CAD': // Dólar de Canadá
        case 'AUD': // Dólar australiano
        case 'NZD': // Dólar neozelandés
        case 'HKD': // Dólar de Hong Kong
        case 'SGD': // Dólar de Singapur
        case 'ARS': // Peso argentino
          return '$';

        case 'CNY': // Yuan chino
        case 'JPY': // Yen japonés
          return '¥';

        case 'GBP': // Libra esterlina
        case 'GIP': // Libras de Gibraltar
          return '£';

        case 'BRL': // Real brasileño
          return 'R$';

        case 'INR': // Rupia india
          return 'Rp';

        case 'CHF': // Franco suizo
          return 'Fr';

        case 'SEK': // Corona sueca
        case 'NOK': // Corona noruega
          return 'kr';

        case 'KPW': // Won de Corea del Norte
        case 'KRW': // Won de Corea del Sur
          return '₩';
        case 'UAH': // uk
          return '₴';
        case 'RUB':
          return '₽';
        default:
          return code;
      }
    } else {
      return '';
    }
  }
}
