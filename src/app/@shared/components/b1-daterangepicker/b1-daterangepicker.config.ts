import { InjectionToken, Injector } from '@angular/core';
import * as _dayjs from 'dayjs';
const dayjs = _dayjs;
import * as  localeData from 'dayjs/plugin/localeData';
dayjs.extend(localeData);

export const LOCALE_CONFIG = new InjectionToken<LocaleConfig>('daterangepicker.config');
/**
 *  LocaleConfig Interface
 */
export interface LocaleConfig {
    direction?: string;
    separator?: string;
    weekLabel?: string;
    applyLabel?: string;
    cancelLabel?: string;
    clearLabel?: string;
    customRangeLabel?: string;
    daysOfWeek?: string[];
    monthNames?: string[];
    firstDay?: number;
    format?: string;
    displayFormat?: string;
}
/**
 *  DefaultLocaleConfig
 */
export const DefaultLocaleConfig: LocaleConfig = {
    direction: 'ltr',
    separator: ' - ',
    weekLabel: 'W',
    applyLabel: 'shared.apply',
    cancelLabel: 'Cancel',
    clearLabel: 'Clear',
    customRangeLabel: 'shared.picker.customRange',
    daysOfWeek: [
        'shared.week.0',
        'shared.week.1',
        'shared.week.2',
        'shared.week.3',
        'shared.week.4',
        'shared.week.5',
        'shared.week.6'
    ],
    monthNames: [
        'shared.months.0',
        'shared.months.1',
        'shared.months.2',
        'shared.months.3',
        'shared.months.4',
        'shared.months.5',
        'shared.months.6',
        'shared.months.7',
        'shared.months.8',
        'shared.months.9',
        'shared.months.10',
        'shared.months.11'
    ],
    firstDay: 1,
    format: 'DD.MM.YYYY',
    displayFormat: 'DD.MM.YYYY'
};
console.log(dayjs.weekdaysMin(), dayjs.monthsShort());
