import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as _dayjs from 'dayjs';
import { DefaultLocaleConfig, LocaleConfig } from './b1-daterangepicker.config';
import { LocaleService } from './local.service';

const dayjs = _dayjs;
import * as localeData from 'dayjs/plugin/localeData';
dayjs.extend(localeData);
import * as LocalizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(LocalizedFormat);
import * as isoWeek from 'dayjs/plugin/isoWeek';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { ModalService } from '@services/modal.service';
dayjs.extend(isoWeek);

export enum SideEnum {
  left = 'left',
  right = 'right',
}

@Component({
  selector: 'b1-daterangepicker',
  styleUrls: ['./b1-daterangepicker.component.scss'],
  templateUrl: './b1-daterangepicker.component.html',
  host: {
    '(click)': 'handleInternalClick($event)',
  },
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B1DaterangepickerComponent),
      multi: true,
    },
  ],
})
export class B1DaterangepickerComponent implements OnInit {
  // accessors
  @Input()
  set minDate(value: _dayjs.Dayjs | string) {
    if (_dayjs.isDayjs(value)) {
      this._minDate = value;
    } else if (typeof value === 'string') {
      this._minDate = dayjs(value);
    } else {
      this._minDate = undefined;
    }
  }
  @Input()
  set maxDate(value: _dayjs.Dayjs | string) {
    if (_dayjs.isDayjs(value)) {
      this._maxDate = value;
    } else if (typeof value === 'string') {
      this._maxDate = dayjs(value);
    } else {
      this._maxDate = undefined;
    }
  }
  @Input() set locale(value) {
    this._locale = { ...DefaultLocaleConfig, ...value };
  }
  get locale(): any {
    return this._locale;
  }
  // custom ranges
  @Input() set ranges(value) {
    this._ranges = value;
    this.renderRanges();
  }
  get ranges(): any {
    return this._ranges;
  }

  constructor(
    private el: ElementRef,
    private _ref: ChangeDetectorRef,
    private modalService: ModalService
  ) {
    this.choosedDate = new EventEmitter();
    this.rangeClicked = new EventEmitter();
    this.datesUpdated = new EventEmitter();
    this.startDateChanged = new EventEmitter();
    this.endDateChanged = new EventEmitter();
    this.cancelClicked = new EventEmitter();
  }
  public _old: { start: any; end: any } = { start: null, end: null };
  chosenLabel?: string;
  calendarVariables: { left: any; right: any } = { left: {}, right: {} };
  tooltiptext: any[] = []; // for storing tooltiptext
  timepickerVariables: { left: any; right: any } = { left: {}, right: {} };
  daterangepicker: { start: FormControl; end: FormControl } = {
    start: new FormControl(),
    end: new FormControl(),
  };
  applyBtn: { disabled: boolean } = { disabled: false };
  @Input()
  startDate = dayjs().startOf('day');
  @Input()
  endDate: _dayjs.Dayjs | undefined = dayjs().endOf('day');

  @Input()
  dateLimit?: number = undefined;
  // used in template for compile time support of enum values.
  sideEnum = SideEnum;
  // general
  @Input()
  autoApply = false;
  @Input()
  singleDatePicker = false;
  @Input()
  showDropdowns = false;
  @Input()
  showWeekNumbers = false;
  @Input()
  showISOWeekNumbers = false;
  @Input()
  linkedCalendars = false;
  @Input()
  autoUpdateInput = true;
  @Input()
  alwaysShowCalendars = false;
  @Input()
  maxSpan = false;
  @Input()
  lockStartDate = false;
  // timepicker variables
  @Input()
  timePicker = false;
  @Input()
  timePicker24Hour = false;
  @Input()
  timePickerIncrement = 1;
  @Input()
  timePickerSeconds = false;
  // end of timepicker variables
  @Input()
  showClearButton = false;
  @Input()
  firstMonthDayClass?: string;
  @Input()
  lastMonthDayClass?: string;
  @Input()
  emptyWeekRowClass?: string;
  @Input()
  emptyWeekColumnClass?: string;
  @Input()
  firstDayOfNextMonthClass?: string;
  @Input()
  lastDayOfPreviousMonthClass?: string;
  @Input()
  showCustomRangeLabel = true;
  @Input()
  showCancel = false;
  @Input()
  keepCalendarOpeningWithRange = false;
  @Input()
  showRangeLabelOnInput = false;
  @Input()
  customRangeDirection = false;
  chosenRange?: string;
  rangesArray: Array<any> = [];

  // some state information
  isShown = false;
  inline = true;
  leftCalendar: any = {};
  rightCalendar: any = {};
  showCalInRanges = false;
  nowHoveredDate = null;
  pickingDate = false;
  options: any = {}; // should get some opt from user
  @Input() drops?: string;
  @Input() opens?: string;
  @Input() closeOnAutoApply = true;
  @Output() choosedDate: EventEmitter<object>;
  @Output() rangeClicked: EventEmitter<object>;
  @Output() datesUpdated: EventEmitter<object>;
  @Output() startDateChanged: EventEmitter<object>;
  @Output() endDateChanged: EventEmitter<object>;
  @Output() cancelClicked: EventEmitter<object>;
  @ViewChild('pickerContainer', { static: true }) pickerContainer!: ElementRef;
  @ViewChild('templateref', { static: true })
  public templateref!: TemplateRef<any>;
  // protected
  _minDate: _dayjs.Dayjs | undefined;
  _maxDate: _dayjs.Dayjs | undefined;
  _locale: LocaleConfig = {};
  _ranges: any = {};

  private modalRef?: NgbModalRef;

  private hiddenSub?: Subscription;
  private element?: ElementRef;
  getMinDate(): _dayjs.Dayjs | undefined {
    return this._minDate;
  }
  getMaxDate(): _dayjs.Dayjs | undefined {
    return this._maxDate;
  }

  ngOnInit() {
    this._buildLocale();
    const daysOfWeek = [...this.locale.daysOfWeek];
    this.locale.firstDay = this.locale.firstDay % 7;
    if (this.locale.firstDay !== 0) {
      let iterator = this.locale.firstDay;

      while (iterator > 0) {
        daysOfWeek.push(daysOfWeek.shift());
        iterator--;
      }
    }
    this.locale.daysOfWeek = daysOfWeek;
    if (this.inline) {
      this._old.start = this.startDate.clone();
      this._old.end = this.endDate?.clone();
    }

    if (this.startDate && this.timePicker) {
      this.setStartDate(this.startDate);
      this.renderTimePicker(SideEnum.left);
    }

    if (this.endDate && this.timePicker) {
      this.setEndDate(this.endDate);
      this.renderTimePicker(SideEnum.right);
    }

    this.updateMonthsInView();
    this.renderCalendar(SideEnum.left);
    this.renderCalendar(SideEnum.right);
    this.renderRanges();
  }
  renderRanges() {
    this.rangesArray = [];
    let start;
    let end;
    if (typeof this.ranges === 'object') {
      for (const range in this.ranges) {
        if (this.ranges[range]) {
          if (typeof this.ranges[range][0] === 'string') {
            start = dayjs(this.ranges[range][0], this.locale.format);
          } else {
            start = dayjs(this.ranges[range][0]);
          }
          if (typeof this.ranges[range][1] === 'string') {
            end = dayjs(this.ranges[range][1], this.locale.format);
          } else {
            end = dayjs(this.ranges[range][1]);
          }
          // If the start or end date exceed those allowed by the minDate or maxSpan
          // options, shorten the range to the allowable period.
          const minDateLocal = this.getMinDate();
          if (minDateLocal && start.isBefore(minDateLocal)) {
            start = minDateLocal.clone();
          }
          const maxDate = this.getMaxDate();
          // if (this.maxSpan && maxDate && start.clone().add(this.maxSpan).isAfter(maxDate)) {
          //   maxDate = start.clone().add(this.maxSpan);
          // }
          if (maxDate && end.isAfter(maxDate)) {
            end = maxDate.clone();
          }
          // If the end of the range is before the minimum or the start of the range is
          // after the maximum, don't display this range option at all.
          if (
            (this.getMinDate() &&
              end.isBefore(
                this.getMinDate(),
                this.timePicker ? 'minute' : 'day'
              )) ||
            (maxDate &&
              start.isAfter(maxDate, this.timePicker ? 'minute' : 'day'))
          ) {
            continue;
          }
          // Support unicode chars in the range names.
          const elem = document.createElement('textarea');
          elem.innerHTML = range;
          const rangeHtml = elem.value;
          this.ranges[rangeHtml] = [start, end];
        }
      }
      for (const range in this.ranges) {
        if (this.ranges[range]) {
          this.rangesArray.push(range);
        }
      }
      if (this.showCustomRangeLabel) {
        this.rangesArray.push(this.locale.customRangeLabel);
      }
      this.showCalInRanges =
        this.chosenRange === this.locale.customRangeLabel ||
        !this.rangesArray.length ||
        this.alwaysShowCalendars;
      if (!this.timePicker) {
        this.startDate = this.startDate.startOf('day');
        this.endDate = this.endDate?.endOf('day');
      }
    }
  }
  renderTimePicker(side: SideEnum) {
    let selected;
    let minDate;
    const maxDate = this.getMaxDate();
    if (side === SideEnum.left) {
      (selected = this.startDate.clone()), (minDate = this.getMinDate());
    } else if (side === SideEnum.right && this.endDate) {
      (selected = this.endDate.clone()), (minDate = this.startDate);
    } else if (side === SideEnum.right && !this.endDate) {
      // don't have an end date, use the start date then put the selected time for the right side as the time
      selected = this._getDateWithTime(this.startDate, SideEnum.right);
      if (selected.isBefore(this.startDate)) {
        selected = this.startDate.clone(); // set it back to the start date the time was backwards
      }
      minDate = this.startDate;
    } else {
      selected = this.startDate.clone();
    }
    const start = this.timePicker24Hour ? 0 : 1;
    const end = this.timePicker24Hour ? 23 : 12;
    this.timepickerVariables[side] = {
      hours: [],
      minutes: [],
      minutesLabel: [],
      seconds: [],
      secondsLabel: [],
      disabledHours: [],
      disabledMinutes: [],
      disabledSeconds: [],
      selectedHour: 0,
      selectedMinute: 0,
      selectedSecond: 0,
    };
    // generate hours
    for (let i = start; i <= end; i++) {
      let i_in_24 = i;
      if (!this.timePicker24Hour) {
        i_in_24 =
          selected.hour() >= 12 ? (i === 12 ? 12 : i + 12) : i === 12 ? 0 : i;
      }

      const time = selected.clone().hour(i_in_24);
      let disabled = false;
      if (minDate && time.minute(59).isBefore(minDate)) {
        disabled = true;
      }
      if (maxDate && time.minute(0).isAfter(maxDate)) {
        disabled = true;
      }

      this.timepickerVariables[side].hours.push(i);
      if (i_in_24 === selected.hour() && !disabled) {
        this.timepickerVariables[side].selectedHour = i;
      } else if (disabled) {
        this.timepickerVariables[side].disabledHours.push(i);
      }
    }

    // generate minutes
    for (let i = 0; i < 60; i += this.timePickerIncrement) {
      const padded = i < 10 ? '0' + i : i;
      const time = selected.clone().minute(i);

      let disabled = false;
      if (minDate && time.second(59).isBefore(minDate)) {
        disabled = true;
      }
      if (maxDate && time.second(0).isAfter(maxDate)) {
        disabled = true;
      }
      this.timepickerVariables[side].minutes.push(i);
      this.timepickerVariables[side].minutesLabel.push(padded);
      if (selected.minute() === i && !disabled) {
        this.timepickerVariables[side].selectedMinute = i;
      } else if (disabled) {
        this.timepickerVariables[side].disabledMinutes.push(i);
      }
    }
    // generate seconds
    if (this.timePickerSeconds) {
      for (let i = 0; i < 60; i++) {
        const padded = i < 10 ? '0' + i : i;
        const time = selected.clone().second(i);

        let disabled = false;
        if (minDate && time.isBefore(minDate)) {
          disabled = true;
        }
        if (maxDate && time.isAfter(maxDate)) {
          disabled = true;
        }

        this.timepickerVariables[side].seconds.push(i);
        this.timepickerVariables[side].secondsLabel.push(padded);
        if (selected.second() === i && !disabled) {
          this.timepickerVariables[side].selectedSecond = i;
        } else if (disabled) {
          this.timepickerVariables[side].disabledSeconds.push(i);
        }
      }
    }
    // generate AM/PM
    if (!this.timePicker24Hour) {
      const am_html = '';
      const pm_html = '';

      if (
        minDate &&
        selected.clone().hour(12).minute(0).second(0).isBefore(minDate)
      ) {
        this.timepickerVariables[side].amDisabled = true;
      }

      if (
        maxDate &&
        selected.clone().hour(0).minute(0).second(0).isAfter(maxDate)
      ) {
        this.timepickerVariables[side].pmDisabled = true;
      }
      if (selected.hour() >= 12) {
        this.timepickerVariables[side].ampmModel = 'PM';
      } else {
        this.timepickerVariables[side].ampmModel = 'AM';
      }
    }
    this.timepickerVariables[side].selected = selected;
  }
  renderCalendar(side: SideEnum) {
    // side enum
    const mainCalendar: any =
      side === SideEnum.left ? this.leftCalendar : this.rightCalendar;
    const month = mainCalendar.month.month();
    const year = mainCalendar.month.year();
    const hour = mainCalendar.month.hour();
    const minute = mainCalendar.month.minute();
    const second = mainCalendar.month.second();
    const daysInMonth = dayjs(new Date(year, month)).daysInMonth();
    const firstDay = dayjs(new Date(year, month, 1));
    const lastDay = dayjs(new Date(year, month, daysInMonth));
    const lastMonth = dayjs(firstDay).subtract(1, 'month').month();
    const lastYear = dayjs(firstDay).subtract(1, 'month').year();
    const daysInLastMonth = dayjs(new Date(lastYear, lastMonth)).daysInMonth();
    const dayOfWeek = firstDay.day();
    // initialize a 6 rows x 7 columns array for the calendar
    const calendar: any = [];
    calendar.firstDay = firstDay;
    calendar.lastDay = lastDay;

    for (let i = 0; i < 6; i++) {
      calendar[i] = [];
    }

    // populate the calendar with date objects
    let startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
    if (startDay > daysInLastMonth) {
      startDay -= 7;
    }

    if (dayOfWeek === this.locale.firstDay) {
      startDay = daysInLastMonth - 6;
    }

    let curDate = dayjs(
      new Date(lastYear, lastMonth, startDay, 12, minute, second)
    );

    for (
      let i = 0, col = 0, row = 0;
      i < 42;
      i++, col++, curDate = dayjs(curDate).add(24, 'hour')
    ) {
      if (i > 0 && col % 7 === 0) {
        col = 0;
        row++;
      }
      calendar[row][col] = curDate
        .clone()
        .hour(hour)
        .minute(minute)
        .second(second);
      curDate = curDate.hour(12);

      const minDateLocal = this.getMinDate();
      if (
        minDateLocal &&
        calendar[row][col].format('YYYY-MM-DD') ===
          minDateLocal.format('YYYY-MM-DD') &&
        calendar[row][col].isBefore(this.getMinDate()) &&
        side === 'left'
      ) {
        calendar[row][col] = minDateLocal.clone();
      }

      const maxDateLocal = this.getMaxDate();
      if (
        maxDateLocal &&
        calendar[row][col].format('YYYY-MM-DD') ===
          maxDateLocal.format('YYYY-MM-DD') &&
        calendar[row][col].isAfter(this.getMaxDate()) &&
        side === 'right'
      ) {
        calendar[row][col] = maxDateLocal.clone();
      }
    }

    // make the calendar object available to hoverDate/clickDate
    if (side === SideEnum.left) {
      this.leftCalendar.calendar = calendar;
    } else {
      this.rightCalendar.calendar = calendar;
    }
    //
    // Display the calendar
    //
    const minDate = side === 'left' ? this.getMinDate() : this.startDate;
    let maxDate = this.getMaxDate();
    // adjust maxDate to reflect the dateLimit setting in order to
    // grey out end dates beyond the dateLimit
    if (this.endDate === null && this.dateLimit) {
      const maxLimit = this.startDate
        .clone()
        .add(this.dateLimit, 'day')
        .endOf('day');
      if (!maxDate || maxLimit.isBefore(maxDate)) {
        maxDate = maxLimit;
      }
    }
    this.calendarVariables[side] = {
      month,
      year,
      hour,
      minute,
      second,
      daysInMonth,
      firstDay,
      lastDay,
      lastMonth,
      lastYear,
      daysInLastMonth,
      dayOfWeek,
      // other vars
      calRows: Array.from(Array(6).keys()),
      calCols: Array.from(Array(7).keys()),
      classes: {},
      minDate,
      maxDate,
      calendar,
    };
    if (this.showDropdowns) {
      const currentMonth = calendar[1][1].month();
      const currentYear = calendar[1][1].year();
      const realCurrentYear = dayjs().year();
      const maxYear = (maxDate && maxDate.year()) || realCurrentYear + 5;
      const minYear = (minDate && minDate.year()) || realCurrentYear - 50;
      const inMinYear = currentYear === minYear;
      const inMaxYear = currentYear === maxYear;
      const years = [];
      for (let y = minYear; y <= maxYear; y++) {
        years.push(y);
      }
      this.calendarVariables[side].dropdowns = {
        currentMonth,
        currentYear,
        maxYear,
        minYear,
        inMinYear,
        inMaxYear,
        monthArrays: Array.from(Array(12).keys()),
        yearArrays: years,
      };
    }

    this._buildCells(calendar, side);
  }
  setStartDate(startDate: any): void {
    if (typeof startDate === 'string') {
      this.startDate = dayjs(startDate, this.locale.format);
    }

    if (typeof startDate === 'object') {
      this.pickingDate = true;
      this.startDate = dayjs(startDate);
    }
    if (!this.timePicker) {
      this.pickingDate = true;
      this.startDate = this.startDate.startOf('day');
    }

    if (this.timePicker && this.timePickerIncrement) {
      this.startDate = this.startDate.minute(
        Math.round(this.startDate.minute() / this.timePickerIncrement) *
          this.timePickerIncrement
      );
    }

    const minDateLocal = this.getMinDate();
    if (minDateLocal && this.startDate.isBefore(minDateLocal)) {
      this.startDate = minDateLocal.clone();
      if (this.timePicker && this.timePickerIncrement) {
        this.startDate = this.startDate.minute(
          Math.round(this.startDate.minute() / this.timePickerIncrement) *
            this.timePickerIncrement
        );
      }
    }
    const maxDateLocal = this.getMaxDate();
    if (maxDateLocal && this.startDate.isAfter(maxDateLocal)) {
      this.startDate = maxDateLocal.clone();
      if (this.timePicker && this.timePickerIncrement) {
        this.startDate = this.startDate.minute(
          Math.floor(this.startDate.minute() / this.timePickerIncrement) *
            this.timePickerIncrement
        );
      }
    }

    if (!this.isShown) {
      this.updateElement();
    }
    this.startDateChanged.emit({ startDate: this.startDate });
    this.updateMonthsInView();
  }

  setEndDate(endDate: any): void {
    if (typeof endDate === 'string') {
      this.endDate = dayjs(endDate, this.locale.format);
    }

    if (typeof endDate === 'object') {
      this.pickingDate = false;
      this.endDate = dayjs(endDate);
    }
    if (!this.timePicker) {
      this.pickingDate = false;
      this.endDate = this.endDate
        ?.add(1, 'd')
        .startOf('day')
        .subtract(1, 'second');
    }

    if (this.timePicker && this.timePickerIncrement) {
      this.endDate?.minute(
        Math.round(this.endDate?.minute() / this.timePickerIncrement) *
          this.timePickerIncrement
      );
    }

    if (this.endDate?.isBefore(this.startDate)) {
      this.endDate = this.startDate.clone();
    }
    const maxDateLocal = this.getMaxDate();
    if (maxDateLocal && this.endDate?.isAfter(maxDateLocal)) {
      this.endDate = maxDateLocal.clone();
    }

    if (
      this.dateLimit &&
      this.startDate.clone().add(this.dateLimit, 'day').isBefore(this.endDate)
    ) {
      this.endDate = this.startDate.clone().add(this.dateLimit, 'day');
    }

    if (!this.isShown) {
      // this.updateElement();
    }
    this.endDateChanged.emit({ endDate: this.endDate });
    this.updateMonthsInView();
  }
  @Input()
  isInvalidDate(date: any): boolean {
    return false;
  }
  @Input()
  isCustomDate(date: any): boolean {
    return false;
  }
  @Input()
  isTooltipDate(date: any): string | undefined {
    return undefined;
  }

  updateView(): void {
    if (this.timePicker) {
      this.renderTimePicker(SideEnum.left);
      this.renderTimePicker(SideEnum.right);
    }
    this.updateMonthsInView();
    this.updateCalendars();
  }

  updateMonthsInView(): void {
    if (this.endDate) {
      // if both dates are visible already, do nothing
      if (
        !this.singleDatePicker &&
        this.leftCalendar.month &&
        this.rightCalendar.month &&
        ((this.startDate &&
          this.leftCalendar &&
          this.startDate.format('YYYY-MM') ===
            this.leftCalendar.month.format('YYYY-MM')) ||
          (this.startDate &&
            this.rightCalendar &&
            this.startDate.format('YYYY-MM') ===
              this.rightCalendar.month.format('YYYY-MM'))) &&
        (this.endDate.format('YYYY-MM') ===
          this.leftCalendar.month.format('YYYY-MM') ||
          this.endDate.format('YYYY-MM') ===
            this.rightCalendar.month.format('YYYY-MM'))
      ) {
        return;
      }
      if (this.startDate) {
        this.leftCalendar.month = this.startDate.clone().date(2);
        if (
          !this.linkedCalendars &&
          (this.endDate.month() !== this.startDate.month() ||
            this.endDate.year() !== this.startDate.year())
        ) {
          this.rightCalendar.month = this.endDate.clone().date(2);
        } else {
          this.rightCalendar.month = this.startDate
            .clone()
            .date(2)
            .add(1, 'month');
        }
      }
    } else {
      if (
        this.leftCalendar.month.format('YYYY-MM') !==
          this.startDate.format('YYYY-MM') &&
        this.rightCalendar.month.format('YYYY-MM') !==
          this.startDate.format('YYYY-MM')
      ) {
        this.leftCalendar.month = this.startDate.clone().date(2);
        this.rightCalendar.month = this.startDate
          .clone()
          .date(2)
          .add(1, 'month');
      }
    }
    const maxDateLocal = this.getMaxDate();
    if (
      maxDateLocal &&
      this.linkedCalendars &&
      !this.singleDatePicker &&
      this.rightCalendar.month > maxDateLocal
    ) {
      this.rightCalendar.month = maxDateLocal.clone().date(2);
      this.leftCalendar.month = maxDateLocal
        .clone()
        .date(2)
        .subtract(1, 'month');
    }
  }
  /**
   *  This is responsible for updating the calendars
   */
  updateCalendars(): void {
    this.renderCalendar(SideEnum.left);
    this.renderCalendar(SideEnum.right);

    if (this.endDate === null) {
      return;
    }
    this.calculateChosenLabel();
  }
  updateElement(): void {
    const format = this.locale.displayFormat
      ? this.locale.displayFormat
      : this.locale.format;
    if (!this.singleDatePicker && this.autoUpdateInput) {
      if (this.startDate && this.endDate) {
        // if we use ranges and should show range label on input
        if (
          this.rangesArray.length &&
          this.showRangeLabelOnInput === true &&
          this.chosenRange &&
          this.locale.customRangeLabel !== this.chosenRange
        ) {
          this.chosenLabel = this.chosenRange;
        } else {
          this.chosenLabel =
            this.startDate.format(format) +
            this.locale.separator +
            this.endDate.format(format);
        }
      }
    } else if (this.autoUpdateInput) {
      this.chosenLabel = this.startDate.format(format);
    }
  }

  remove(): void {
    this.isShown = false;
  }
  /**
   * this should calculate the label
   */
  calculateChosenLabel(): void {
    if (!this.locale || !this.locale.separator) {
      this._buildLocale();
    }
    let customRange = true;
    let i = 0;
    if (this.rangesArray.length > 0) {
      for (const range in this.ranges) {
        if (this.ranges[range]) {
          if (this.timePicker) {
            const format = this.timePickerSeconds
              ? 'YYYY-MM-DD HH:mm:ss'
              : 'YYYY-MM-DD HH:mm';
            // ignore times when comparing dates if time picker seconds is not enabled
            if (
              this.startDate.format(format) ===
                this.ranges[range][0].format(format) &&
              this.endDate?.format(format) ===
                this.ranges[range][1].format(format)
            ) {
              customRange = false;
              this.chosenRange = this.rangesArray[i];
              break;
            }
          } else {
            // ignore times when comparing dates if time picker is not enabled
            if (
              this.startDate.format('YYYY-MM-DD') ===
                this.ranges[range][0].format('YYYY-MM-DD') &&
              this.endDate?.format('YYYY-MM-DD') ===
                this.ranges[range][1].format('YYYY-MM-DD')
            ) {
              customRange = false;
              this.chosenRange = this.rangesArray[i];
              break;
            }
          }
          i++;
        }
      }
      if (customRange) {
        if (this.showCustomRangeLabel) {
          this.chosenRange = this.locale.customRangeLabel;
        } else {
          this.chosenRange = undefined;
        }
        // // if custom label: show calendar
        this.showCalInRanges = true;
      }
    }

    this.updateElement();
  }

  clickApply(e?: any): void {
    if (!this.singleDatePicker && this.startDate && !this.endDate) {
      this.endDate = this._getDateWithTime(this.startDate, SideEnum.right);

      this.calculateChosenLabel();
    }
    // if (this.isInvalidDate && this.startDate && this.endDate) {
    //   // get if there are invalid date between range

    //   let d = this.startDate.clone();
    //   while (d.isBefore(this.endDate)) {
    //     if (this.isInvalidDate(d)) {
    //       this.endDate = d.subtract(1, 'days');
    //       this.calculateChosenLabel();
    //       break;
    //     }
    //     d = d.add(1, 'days');
    //   }
    // }
    if (this.chosenLabel) {
      this.choosedDate.emit({
        chosenLabel: this.chosenLabel,
        startDate: this.startDate,
        endDate: this.endDate,
      });
    }
    if (!this.singleDatePicker) {
      this.datesUpdated.emit({
        startDate: this.startDate,
        endDate: this.endDate,
      });
    } else {
      this.datesUpdated.emit(this.startDate);
    }

    if (e || (this.closeOnAutoApply && !e)) {
      this.hide('apply');
    }
  }

  clickCancel(e: any): void {
    this.startDate = this._old.start;
    this.endDate = this._old.end;
    if (this.inline) {
      this.updateView();
    }
    this.cancelClicked.emit();
    this.hide();
  }
  /**
   * called when month is changed
   * @param monthEvent get value in event.target.value
   * @param side left or right
   */
  monthChanged(monthEvent: any, side: SideEnum): void {
    const year = this.calendarVariables[side].dropdowns.currentYear;
    const month = parseInt(monthEvent.target.value, 10);
    this.monthOrYearChanged(month, year, side);
  }
  /**
   * called when year is changed
   * @param yearEvent get value in event.target.value
   * @param side left or right
   */
  yearChanged(yearEvent: any, side: SideEnum): void {
    const month = this.calendarVariables[side].dropdowns.currentMonth;
    const year = parseInt(yearEvent.target.value, 10);
    this.monthOrYearChanged(month, year, side);
  }
  /**
   * called when time is changed
   * @param timeEvent  an event
   * @param side left or right
   */
  timeChanged(timeEvent: any, side: SideEnum): void {
    let hour = parseInt(this.timepickerVariables[side].selectedHour, 10);
    const minute = parseInt(this.timepickerVariables[side].selectedMinute, 10);
    const second = this.timePickerSeconds
      ? parseInt(this.timepickerVariables[side].selectedSecond, 10)
      : 0;

    if (!this.timePicker24Hour) {
      const ampm = this.timepickerVariables[side].ampmModel;
      if (ampm === 'PM' && hour < 12) {
        hour += 12;
      }
      if (ampm === 'AM' && hour === 12) {
        hour = 0;
      }
    }

    if (side === SideEnum.left) {
      let start = this.startDate.clone();
      start = start.hour(hour);
      start = start.minute(minute);
      start = start.second(second);
      this.setStartDate(start);
      if (this.singleDatePicker) {
        this.endDate = this.startDate.clone();
      } else if (
        this.endDate &&
        this.endDate.format('YYYY-MM-DD') === start.format('YYYY-MM-DD') &&
        this.endDate.isBefore(start)
      ) {
        this.setEndDate(start.clone());
      } else if (!this.endDate && this.timePicker) {
        const startClone = this._getDateWithTime(start, SideEnum.right);

        if (startClone.isBefore(start)) {
          this.timepickerVariables[SideEnum.right].selectedHour = hour;
          this.timepickerVariables[SideEnum.right].selectedMinute = minute;
          this.timepickerVariables[SideEnum.right].selectedSecond = second;
        }
      }
    } else if (this.endDate) {
      let end = this.endDate.clone();
      end = end.hour(hour);
      end = end.minute(minute);
      end = end.second(second);
      this.setEndDate(end);
    }

    // update the calendars so all clickable dates reflect the new time component
    this.updateCalendars();

    // re-render the time pickers because changing one selection can affect what's enabled in another
    this.renderTimePicker(SideEnum.left);
    this.renderTimePicker(SideEnum.right);

    if (this.autoApply) {
      this.clickApply();
    }
  }
  /**
   *  call when month or year changed
   * @param month month number 0 -11
   * @param year year eg: 1995
   * @param side left or right
   */
  monthOrYearChanged(month: number, year: number, side: SideEnum): void {
    const isLeft = side === SideEnum.left;

    if (!isLeft) {
      if (
        year < this.startDate.year() ||
        (year === this.startDate.year() && month < this.startDate.month())
      ) {
        month = this.startDate.month();
        year = this.startDate.year();
      }
    }
    const minDateLocal = this.getMinDate();
    if (minDateLocal) {
      if (
        year < minDateLocal.year() ||
        (year === minDateLocal.year() && month < minDateLocal.month())
      ) {
        month = minDateLocal.month();
        year = minDateLocal.year();
      }
    }

    const maxDateLocal = this.getMaxDate();
    if (maxDateLocal) {
      if (
        year > maxDateLocal.year() ||
        (year === maxDateLocal.year() && month > maxDateLocal.month())
      ) {
        month = maxDateLocal.month();
        year = maxDateLocal.year();
      }
    }
    this.calendarVariables[side].dropdowns.currentYear = year;
    this.calendarVariables[side].dropdowns.currentMonth = month;
    if (isLeft) {
      this.leftCalendar.month = this.leftCalendar.month.month(month).year(year);
      if (this.linkedCalendars) {
        this.rightCalendar.month = this.leftCalendar.month
          .clone()
          .add(1, 'month');
      }
    } else {
      this.rightCalendar.month = this.rightCalendar.month
        .month(month)
        .year(year);
      if (this.linkedCalendars) {
        this.leftCalendar.month = this.rightCalendar.month
          .clone()
          .subtract(1, 'month');
      }
    }
    this.updateCalendars();
  }

  /**
   * Click on previous month
   * @param side left or right calendar
   */
  clickPrev(side: SideEnum): void {
    if (side === SideEnum.left) {
      this.leftCalendar.month = this.leftCalendar.month.subtract(1, 'month');
      if (this.linkedCalendars) {
        this.rightCalendar.month = this.rightCalendar.month.subtract(
          1,
          'month'
        );
      }
    } else {
      this.rightCalendar.month = this.rightCalendar.month.subtract(1, 'month');
    }
    this.updateCalendars();
  }
  /**
   * Click on next month
   * @param side left or right calendar
   */
  clickNext(side: SideEnum): void {
    if (side === SideEnum.left) {
      this.leftCalendar.month = this.leftCalendar.month.add(1, 'month');
    } else {
      this.rightCalendar.month = this.rightCalendar.month.add(1, 'month');
      if (this.linkedCalendars) {
        this.leftCalendar.month = this.leftCalendar.month.add(1, 'month');
      }
    }
    this.updateCalendars();
  }

  /**
   * When hovering a date
   * @param e event: get value by e.target.value
   * @param side left or right
   * @param row row position of the current date clicked
   * @param col col position of the current date clicked
   */
  hoverDate(e: any, side: SideEnum, row: number, col: number): void {
    const leftCalDate = this.calendarVariables.left.calendar[row][col];
    const rightCalDate = this.calendarVariables.right.calendar[row][col];
    if (this.pickingDate) {
      this.nowHoveredDate = side === SideEnum.left ? leftCalDate : rightCalDate;
      this.renderCalendar(SideEnum.left);
      this.renderCalendar(SideEnum.right);
    }
    const tooltip =
      side === SideEnum.left
        ? this.tooltiptext[leftCalDate]
        : this.tooltiptext[rightCalDate];
    if (tooltip.length > 0) {
      e.target.setAttribute('title', tooltip);
    }
  }
  /**
   * When selecting a date
   * @param e event: get value by e.target.value
   * @param side left or right
   * @param row row position of the current date clicked
   * @param col col position of the current date clicked
   */
  clickDate(e: any, side: SideEnum, row: number, col: number): void {
    if (e.target.tagName === 'TD') {
      if (!e.target.classList.contains('available')) {
        return;
      }
    } else if (e.target.tagName === 'SPAN') {
      if (!e.target.parentElement.classList.contains('available')) {
        return;
      }
    }
    if (this.rangesArray.length) {
      this.chosenRange = this.locale.customRangeLabel;
    }

    let date =
      side === SideEnum.left
        ? this.leftCalendar.calendar[row][col]
        : this.rightCalendar.calendar[row][col];

    if (
      (this.endDate ||
        (date.isBefore(this.startDate, 'day') &&
          this.customRangeDirection === false)) &&
      this.lockStartDate === false
    ) {
      // picking start
      if (this.timePicker) {
        date = this._getDateWithTime(date, SideEnum.left);
      }
      this.endDate = undefined;
      this.setStartDate(date.clone());
    } else if (
      !this.endDate &&
      date.isBefore(this.startDate) &&
      this.customRangeDirection === false
    ) {
      // special case: clicking the same date for start/end,
      // but the time of the end date is before the start date
      this.setEndDate(this.startDate.clone());
    } else {
      // picking end
      if (this.timePicker) {
        date = this._getDateWithTime(date, SideEnum.right);
      }
      if (
        date.isBefore(this.startDate, 'day') === true &&
        this.customRangeDirection === true
      ) {
        this.setEndDate(this.startDate);
        this.setStartDate(date.clone());
      } else {
        this.setEndDate(date.clone());
      }

      if (this.autoApply) {
        this.calculateChosenLabel();
      }
    }

    if (this.singleDatePicker) {
      this.setEndDate(this.startDate);
      this.updateElement();
      if (this.autoApply) {
        this.clickApply();
      }
    }

    this.updateView();

    if (
      this.autoApply &&
      this.startDate &&
      this.endDate &&
      !this.singleDatePicker
    ) {
      this.clickApply();
    }

    // This is to cancel the blur event handler if the mouse was in one of the inputs
    e.stopPropagation();
  }
  /**
   *  Click on the custom range
   * @param e: Event
   * @param label Label
   */
  clickRange(e: any, label: any): void {
    this.chosenRange = label;
    if (label === this.locale.customRangeLabel) {
      this.isShown = true; // show calendars
      this.showCalInRanges = true;
      setTimeout(() => {
        document.getElementById(label)?.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      const dates = this.ranges[label];
      this.startDate = dates[0].clone();
      this.endDate = dates[1].clone();
      if (
        this.showRangeLabelOnInput &&
        label !== this.locale.customRangeLabel
      ) {
        this.chosenLabel = label;
      } else {
        this.calculateChosenLabel();
      }
      this.showCalInRanges =
        !this.rangesArray.length || this.alwaysShowCalendars;

      if (!this.timePicker) {
        this.startDate = this.startDate.startOf('day');
        this.endDate = this.endDate?.endOf('day');
      }

      if (!this.alwaysShowCalendars) {
        this.isShown = false; // hide calendars
      }
      this.rangeClicked.emit({ label, dates });
      if (!this.keepCalendarOpeningWithRange || this.autoApply) {
        this.clickApply();
      } else {
        if (!this.alwaysShowCalendars) {
          return this.clickApply();
        }
        const maxDateLocal = this.getMaxDate();
        if (maxDateLocal && maxDateLocal.isSame(dates[0], 'month')) {
          this.rightCalendar.month = this.rightCalendar.month.month(
            dates[0].month()
          );
          this.rightCalendar.month = this.rightCalendar.month.year(
            dates[0].year()
          );
          this.leftCalendar.month = this.leftCalendar.month.month(
            dates[0].month() - 1
          );
          this.leftCalendar.month = this.leftCalendar.month.year(
            dates[1].year()
          );
        } else {
          this.leftCalendar.month = this.leftCalendar.month.month(
            dates[0].month()
          );
          this.leftCalendar.month = this.leftCalendar.month.year(
            dates[0].year()
          );
          // get the next year
          const nextMonth = dates[0].clone().add(1, 'month');
          this.rightCalendar.month = this.rightCalendar.month.month(
            nextMonth.month()
          );
          this.rightCalendar.month = this.rightCalendar.month.year(
            nextMonth.year()
          );
        }
        this.updateCalendars();
        if (this.timePicker) {
          this.renderTimePicker(SideEnum.left);
          this.renderTimePicker(SideEnum.right);
        }
      }
      if (this.modalRef !== undefined) {
        this.modalRef.close();
      }
    }
  }
  show(e?: any, el?: ElementRef): void {
    const isMobile = window.innerWidth <= environment.mobileWidth;
    this.element = el;

    if (this.isShown || (this.singleDatePicker && isMobile)) {
      return;
    }
    this._old.start = this.startDate.clone();
    this._old.end = this.endDate?.clone();

    if (!isMobile) {
      this.isShown = true;
    }

    this.updateView();

    if (isMobile) {
      setTimeout(() => {
        this.modalRef = this.modalService.open(this.templateref);

        this.showCalInRanges =
          this.chosenRange === this.locale.customRangeLabel;
        this.modalRef.hidden.subscribe(() => {
          this.hide('sub');
        });
      });
    }
    // this.isShown = true;
  }

  hide(e?: any): void {
    if (!this.isShown && !this.modalRef) {
      return;
    }
    // incomplete date selection, revert to last values
    if (e === 'outside') {
      if (this._old.start) {
        this.startDate = this._old.start.clone();
      }
      if (this._old.end) {
        this.endDate = this._old.end.clone();
      }
    }

    // if a new date range was selected, invoke the user callback function
    if (
      !this.startDate.isSame(this._old.start) ||
      !this.endDate?.isSame(this._old.end)
    ) {
      // this.callback(this.startDate, this.endDate, this.chosenLabel);
    }
    // this.updateCalendars();
    // if picker is attached to a text input, update it
    this.updateElement();
    this.isShown = false;
    this.element?.nativeElement.classList.remove('picker-open');
    this._ref.detectChanges();
    if (e && this.hiddenSub) {
      this.hiddenSub.unsubscribe();
    }
    if (e === 'apply' && this.modalRef) {
      this.modalRef.close();
    }
  }

  /**
   * handle click on all element in the component, useful for outside of click
   * @param e event
   */
  handleInternalClick(e: any): void {
    e.stopPropagation();
  }
  /**
   * update the locale options
   * @param locale Locale
   */
  updateLocale(locale: any): void {
    for (const key in locale) {
      if (locale.hasOwnProperty(key)) {
        this.locale[key] = locale[key];
        if (key === 'customRangeLabel') {
          this.renderRanges();
        }
      }
    }
  }
  /**
   *  clear the daterange picker
   */
  clear(): void {
    this.startDate = dayjs().startOf('day');
    this.endDate = dayjs().endOf('day');
    this.choosedDate.emit({ chosenLabel: '', startDate: null, endDate: null });
    this.datesUpdated.emit({ startDate: null, endDate: null });
    this.hide();
  }

  /**
   * Find out if the selected range should be disabled if it doesn't
   * fit into minDate and maxDate limitations.
   */
  disableRange(range: any): boolean {
    if (range === this.locale.customRangeLabel) {
      return false;
    }
    const rangeMarkers = this.ranges[range];
    const areBothBefore = rangeMarkers.every((date: any) => {
      if (!this.getMinDate()) {
        return false;
      }
      return date.isBefore(this.getMinDate());
    });

    const areBothAfter = rangeMarkers.every((date: any) => {
      if (!this.getMaxDate()) {
        return false;
      }
      return date.isAfter(this.getMaxDate());
    });
    return areBothBefore || areBothAfter;
  }
  /**
   *
   * @param date the date to add time
   * @param side left or right
   */
  private _getDateWithTime(date: any, side: SideEnum): _dayjs.Dayjs {
    let hour = parseInt(this.timepickerVariables[side].selectedHour, 10);
    if (!this.timePicker24Hour) {
      const ampm = this.timepickerVariables[side].ampmModel;
      if (ampm === 'PM' && hour < 12) {
        hour += 12;
      }
      if (ampm === 'AM' && hour === 12) {
        hour = 0;
      }
    }
    const minute = parseInt(this.timepickerVariables[side].selectedMinute, 10);
    const second = this.timePickerSeconds
      ? parseInt(this.timepickerVariables[side].selectedSecond, 10)
      : 0;
    return date.clone().hour(hour).minute(minute).second(second);
  }
  /**
   *  build the locale config
   */
  private _buildLocale(): void {
    this.locale = { ...DefaultLocaleConfig, ...this.locale };
    if (!this.locale.format) {
      if (this.timePicker) {
        this.locale.format = dayjs.localeData().longDateFormat('lll');
      } else {
        this.locale.format = dayjs.localeData().longDateFormat('L');
      }
    }
  }
  private _buildCells(calendar: any, side: SideEnum): void {
    for (let row = 0; row < 6; row++) {
      this.calendarVariables[side].classes[row] = {};
      const rowClasses = [];
      if (
        this.emptyWeekRowClass &&
        Array.from(Array(7).keys()).some(
          (i) => calendar[row][i].month() !== this.calendarVariables[side].month
        )
      ) {
        rowClasses.push(this.emptyWeekRowClass);
      }
      for (let col = 0; col < 7; col++) {
        const classes = [];
        // empty week row class
        if (this.emptyWeekColumnClass) {
          if (
            calendar[row][col].month() !== this.calendarVariables[side].month
          ) {
            classes.push(this.emptyWeekColumnClass);
          }
        }
        // highlight today's date
        if (calendar[row][col].isSame(new Date(), 'day')) {
          classes.push('today');
        }
        // highlight weekends
        if (calendar[row][col].isoWeekday() > 5) {
          classes.push('weekend');
        }
        // grey out the dates in other months displayed at beginning and end of this calendar
        if (calendar[row][col].month() !== calendar[1][1].month()) {
          classes.push('off');

          // mark the last day of the previous month in this calendar
          if (
            this.lastDayOfPreviousMonthClass &&
            (calendar[row][col].month() < calendar[1][1].month() ||
              calendar[1][1].month() === 0) &&
            calendar[row][col].date() ===
              this.calendarVariables[side].daysInLastMonth
          ) {
            classes.push(this.lastDayOfPreviousMonthClass);
          }

          // mark the first day of the next month in this calendar
          if (
            this.firstDayOfNextMonthClass &&
            (calendar[row][col].month() > calendar[1][1].month() ||
              calendar[row][col].month() === 0) &&
            calendar[row][col].date() === 1
          ) {
            classes.push(this.firstDayOfNextMonthClass);
          }
        }
        // mark the first day of the current month with a custom class
        if (
          this.firstMonthDayClass &&
          calendar[row][col].month() === calendar[1][1].month() &&
          calendar[row][col].date() === calendar.firstDay.date()
        ) {
          classes.push(this.firstMonthDayClass);
        }
        // mark the last day of the current month with a custom class
        if (
          this.lastMonthDayClass &&
          calendar[row][col].month() === calendar[1][1].month() &&
          calendar[row][col].date() === calendar.lastDay.date()
        ) {
          classes.push(this.lastMonthDayClass);
        }
        // don't allow selection of dates before the minimum date
        if (
          this.getMinDate() &&
          calendar[row][col].isBefore(this.getMinDate(), 'day')
        ) {
          classes.push('off', 'disabled');
        }
        // don't allow selection of dates after the maximum date
        if (
          this.calendarVariables[side].maxDate &&
          calendar[row][col].isAfter(
            this.calendarVariables[side].maxDate,
            'day'
          )
        ) {
          classes.push('off', 'disabled');
        }
        // don't allow selection of date if a custom function decides it's invalid
        if (this.isInvalidDate(calendar[row][col])) {
          classes.push('off', 'disabled', 'invalid');
        }
        // highlight the currently selected start date
        if (
          this.startDate &&
          calendar[row][col].format('YYYY-MM-DD') ===
            this.startDate.format('YYYY-MM-DD')
        ) {
          classes.push('active', 'start-date');
        }
        // highlight the currently selected end date
        if (
          this.endDate != null &&
          calendar[row][col].format('YYYY-MM-DD') ===
            this.endDate.format('YYYY-MM-DD')
        ) {
          classes.push('active', 'end-date');
        }
        // highlight dates in-between the selected dates
        if (
          ((this.nowHoveredDate != null && this.pickingDate) ||
            this.endDate != null) &&
          calendar[row][col] > this.startDate &&
          this.endDate &&
          (calendar[row][col] < this.endDate ||
            (calendar[row][col] < (this.nowHoveredDate as any) &&
              this.pickingDate)) &&
          !classes.find((el) => el === 'off')
        ) {
          classes.push('in-range');
        }
        // apply custom classes for this date
        const isCustom = this.isCustomDate(calendar[row][col]);
        if (isCustom !== false) {
          if (typeof isCustom === 'string') {
            classes.push(isCustom);
          } else {
            Array.prototype.push.apply(classes, isCustom as any);
          }
        }
        // apply custom tooltip for this date
        const isTooltip = this.isTooltipDate(calendar[row][col]);
        if (isTooltip) {
          if (typeof isTooltip === 'string') {
            this.tooltiptext[calendar[row][col]] = isTooltip; // setting tooltiptext for custom date
          } else {
            this.tooltiptext[calendar[row][col]] =
              'Put the tooltip as the returned value of isTooltipDate';
          }
        } else {
          this.tooltiptext[calendar[row][col]] = '';
        }
        // store classes var
        let cname = '';
        let disabled = false;
        for (const classObj of classes) {
          cname += classObj + ' ';
          if (classObj === 'disabled') {
            disabled = true;
          }
        }
        if (!disabled) {
          cname += 'available';
        }
        this.calendarVariables[side].classes[row][col] = cname.replace(
          /^\s+|\s+$/g,
          ''
        );
      }
      this.calendarVariables[side].classes[row].classList =
        rowClasses.join(' ');
    }
  }

  isSame(): boolean {
    return (
      this.endDate?.unix() === this._old.end?.unix() &&
      this.startDate.unix() === this._old.start.unix()
    );
  }
}
