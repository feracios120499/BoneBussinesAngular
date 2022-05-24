import {
  ChangeDetectorRef,
  ComponentFactoryResolver,
  Directive,
  DoCheck,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  KeyValueDiffer,
  KeyValueDiffers,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateRange } from '@models/date-range.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _dayjs from 'dayjs';
import { FormViewAdapter, NGRX_FORM_VIEW_ADAPTER } from 'ngrx-forms';
import { environment } from 'src/environments/environment';

import { B1DaterangepickerComponent } from './b1-daterangepicker.component';
import { DefaultLocaleConfig, LocaleConfig } from './b1-daterangepicker.config';

const dayjs = _dayjs;

// tslint:disable-next-line: no-conflicting-lifecycle
@Directive({
  selector: 'input[b1-daterangepicker]',
  host: {
    '(keyup.esc)': 'hide()',
    '(blur)': 'onBlur()',
    '(click)': 'open()',
    '(keyup)': 'inputChanged($event)',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => B1DaterangepickerDirective),
      multi: true,
    },
  ],
})
export class B1DaterangepickerDirective implements OnInit, OnChanges, DoCheck, FormViewAdapter {
  public picker: B1DaterangepickerComponent;
  private _onChange = Function.prototype;
  private _onTouched = Function.prototype;
  private _validatorChange = Function.prototype;

  private _disabled = false;
  private _value: any;
  private localeDiffer?: KeyValueDiffer<string, any>;
  @Input()
  minDate?: _dayjs.Dayjs;
  @Input()
  maxDate?: _dayjs.Dayjs;
  @Input()
  autoApply?: boolean;
  @Input()
  alwaysShowCalendars?: boolean;
  @Input()
  showCustomRangeLabel = true;
  @Input()
  linkedCalendars?: boolean;
  @Input()
  dateLimit?: number = undefined;
  @Input()
  singleDatePicker = false;
  @Input()
  showWeekNumbers?: boolean;
  @Input()
  showISOWeekNumbers?: boolean;
  @Input()
  showDropdowns?: boolean;
  @Input()
  isInvalidDate?: Function;
  @Input()
  isCustomDate?: Function;
  @Input()
  isTooltipDate?: Function;
  @Input()
  showClearButton?: boolean;
  @Input()
  customRangeDirection?: boolean;
  @Input()
  ranges: any;
  @Input()
  opens: string;
  @Input()
  drops: string;
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
  keepCalendarOpeningWithRange?: boolean;
  @Input()
  showRangeLabelOnInput?: boolean;
  @Input()
  showCancel = false;
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
  @Input() closeOnAutoApply = true;
  _locale: LocaleConfig = {};
  @Input() set locale(value) {
    this._locale = { ...DefaultLocaleConfig, ...value };
  }
  get locale(): any {
    return this._locale;
  }
  @Input()
  private _endKey!: string;
  private _startKey!: string;
  @Input() set startKey(value: string) {
    if (value !== null) {
      this._startKey = value;
    } else {
      this._startKey = 'startDate';
    }
  }
  @Input() set endKey(value: string) {
    if (value !== null) {
      this._endKey = value;
    } else {
      this._endKey = 'endDate';
    }
  }
  notForChangesProperty: Array<string> = ['locale', 'endKey', 'startKey'];

  get value(): DateRange | _dayjs.Dayjs {
    console.log(this._value);
    if (this.singleDatePicker) {
      return this._value[this._startKey] || null;
    } else {
      return this._value || null;
    }
  }
  set value(val: DateRange | _dayjs.Dayjs | undefined) {
    if (!this.singleDatePicker && this._value && this._value[this._startKey]) {
      const currentStart = (this._value as any)[this._startKey];
      const currentEnd = (this._value as any)[this._endKey];
      const start = dayjs((val as any)[this._startKey].$d);
      const end = dayjs((val as any)[this._endKey].$d);
      if (start.isSame(currentStart, 'day') && end.isSame(currentEnd, 'day')) return;
    }

    if (this.singleDatePicker) {
      if (this._startKey in (val as any)) {
        val = (val as any)[this._startKey];
      }
    }
    if (dayjs.isDayjs(val)) {
      val = dayjs(val.format('YYYY-MM-DD'), 'YYYY-MM-DD');
    }
    this._value = val;
    this._onChange(val);
    this._changeDetectorRef.markForCheck();
  }
  @Output('change') onChange: EventEmitter<Object> = new EventEmitter();
  @Output('rangeClicked') rangeClicked: EventEmitter<Object> = new EventEmitter();
  @Output('datesUpdated') datesUpdated: EventEmitter<Object> = new EventEmitter();
  @Output() startDateChanged: EventEmitter<Object> = new EventEmitter();
  @Output() endDateChanged: EventEmitter<Object> = new EventEmitter();
  @HostBinding('disabled') get disabled() {
    return this._disabled;
  }

  constructor(
    public viewContainerRef: ViewContainerRef,
    public _changeDetectorRef: ChangeDetectorRef,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _el: ElementRef,
    private _renderer: Renderer2,
    private differs: KeyValueDiffers,
    private elementRef: ElementRef,
    private modalService: NgbModal
  ) {
    this.endKey = 'endDate';
    this.startKey = 'startDate';
    this.drops = 'down';
    this.opens = 'auto';
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(B1DaterangepickerComponent);
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    this.picker = componentRef.instance as B1DaterangepickerComponent;
    this.picker.inline = false; // set inline to false for all directive usage
  }
  setViewValue(value: any): void {
    // const valueCopy = { ...value };
    // if (valueCopy.start && typeof valueCopy.start === 'string') {
    //     valueCopy.start = dayjs(valueCopy.start);
    // }
    // if (valueCopy.end && typeof valueCopy.end === 'string') {
    //     valueCopy.end = dayjs(valueCopy.end);
    // }
    this.writeValue(value);
  }
  setOnChangeCallback(fn: (value: any) => void): void {
    this._onChange = fn;
  }
  setOnTouchedCallback(fn: () => void): void {
    this._onTouched = fn;
  }

  ngOnInit() {
    this.picker.startDateChanged.asObservable().subscribe((itemChanged: any) => {
      this.startDateChanged.emit(itemChanged);
    });
    this.picker.endDateChanged.asObservable().subscribe((itemChanged: any) => {
      this.endDateChanged.emit(itemChanged);
    });
    this.picker.rangeClicked.asObservable().subscribe((range: any) => {
      this.rangeClicked.emit(range);
    });
    this.picker.datesUpdated.asObservable().subscribe((range: any) => {
      this.datesUpdated.emit(range);
    });
    this.picker.choosedDate.asObservable().subscribe((change: any) => {
      if (change) {
        const value: any = {};
        value[this._startKey] = change.startDate;
        value[this._endKey] = change.endDate;
        this.value = value;
        this.onChange.emit(value);
        if (typeof change.chosenLabel === 'string') {
          this._el.nativeElement.value = change.chosenLabel;
        }
      }
    });
    this.picker.firstMonthDayClass = this.firstMonthDayClass;
    this.picker.lastMonthDayClass = this.lastMonthDayClass;
    this.picker.emptyWeekRowClass = this.emptyWeekRowClass;
    this.picker.emptyWeekColumnClass = this.emptyWeekColumnClass;
    this.picker.firstDayOfNextMonthClass = this.firstDayOfNextMonthClass;
    this.picker.lastDayOfPreviousMonthClass = this.lastDayOfPreviousMonthClass;
    this.picker.drops = this.drops;
    this.picker.opens = this.opens;
    this.localeDiffer = this.differs.find(this.locale).create();
    this.picker.closeOnAutoApply = this.closeOnAutoApply;
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const change in changes) {
      if (changes.hasOwnProperty(change)) {
        if (this.notForChangesProperty.indexOf(change) === -1) {
          (this.picker as any)[change] = changes[change].currentValue;
        }
      }
    }
  }

  ngDoCheck() {
    if (this.localeDiffer) {
      const changes = this.localeDiffer.diff(this.locale);
      if (changes) {
        this.picker.updateLocale(this.locale);
      }
    }
  }

  onBlur() {
    this._onTouched();
  }

  open(event?: any) {
    if (this.disabled) {
      return;
    }
    this.elementRef.nativeElement.classList.add('picker-open');
    this.picker.show(event, this.elementRef);
    if (window.innerWidth > environment.mobileWidth) {
      setTimeout(() => {
        this.setPosition();
      });
    }
  }

  hide(e?: any) {
    this.elementRef.nativeElement.classList.remove('picker-open');
    this.picker.hide(e);
  }
  toggle(e?: any) {
    if (this.picker.isShown) {
      this.hide(e);
    } else {
      this.open(e);
    }
  }

  clear() {
    this.picker.clear();
  }

  writeValue(value: any) {
    this.setValue(value);
  }
  registerOnChange(fn: any) {
    this._onChange = fn;
  }
  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }
  setDisabledState(state: boolean): void {
    this._disabled = state;
  }
  private setValue(val: any) {
    if (val) {
      this.value = val;
      if (val[this._startKey]) {
        this.picker.setStartDate(val[this._startKey]);
      }
      if (val[this._endKey]) {
        this.picker.setEndDate(val[this._endKey]);
      }
      if (dayjs.isDayjs(val)) {
        this.picker.setStartDate(val);
        this.picker.setEndDate(val);
      }
      this.picker.calculateChosenLabel();
      if (this.picker.chosenLabel) {
        this._el.nativeElement.value = this.picker.chosenLabel;
      }
    } else {
      this.picker.clear();
    }
  }
  /**
   * Set position of the calendar
   */
  setPosition() {
    let style;
    let containerTop;
    const container = this.picker.pickerContainer.nativeElement;
    const element = this._el.nativeElement;
    if (this.drops && this.drops === 'up') {
      containerTop = element.offsetTop - container.clientHeight + 'px';
    } else {
      containerTop = 'auto';
    }
    if (this.opens === 'left') {
      style = {
        top: containerTop,
        left: element.offsetLeft - container.clientWidth + element.clientWidth + 'px',
        right: 'auto',
      };
    } else if (this.opens === 'center') {
      style = {
        top: containerTop,
        left: element.offsetLeft + element.clientWidth / 2 - container.clientWidth / 2 + 'px',
        right: 'auto',
      };
    } else if (this.opens === 'right') {
      style = {
        top: containerTop,
        left: element.offsetLeft + 'px',
        right: 'auto',
      };
    } else {
      const position = element.offsetLeft + element.clientWidth / 2 - container.clientWidth / 2;
      if (position < 0) {
        style = {
          top: containerTop,
          left: element.offsetLeft + 'px',
          right: 'auto',
        };
      } else {
        style = {
          top: containerTop,
          left: position + 'px',
          right: 'auto',
        };
      }
    }
    if (style) {
      this._renderer.setStyle(container, 'top', style.top);
      this._renderer.setStyle(container, 'left', style.left);
      this._renderer.setStyle(container, 'right', style.right);
    }
  }
  inputChanged(e: any) {
    if (e.target.tagName.toLowerCase() !== 'input') {
      return;
    }
    if (!e.target.value.length) {
      return;
    }
    const dateString = e.target.value.split(this.picker.locale.separator);
    let start = null;
    let end = null;
    if (dateString.length === 2) {
      start = dayjs(dateString[0], this.picker.locale.format);
      end = dayjs(dateString[1], this.picker.locale.format);
    }
    if (this.singleDatePicker || start === null || end === null) {
      start = dayjs(e.target.value, this.picker.locale.format);
      end = start;
    }
    if (!start.isValid() || !end.isValid()) {
      return;
    }
    this.picker.setStartDate(start);
    this.picker.setEndDate(end);
    this.picker.updateView();
  }
  /**
   * For click outside of the calendar's container
   * @param event event object
   */
  @HostListener('document:click', ['$event'])
  outsideClick(event: any): void {
    if (!event.target) {
      return;
    }

    if (event.target.classList.contains('ngx-daterangepicker-action')) {
      return;
    }

    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.hide('outside');
    }
  }
}
