import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  HostBinding,
  HostListener,
  NgZone,
  OnDestroy,
} from '@angular/core';
import { IndividualConfig, ToastPackage, ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: '[custom-toast-component]',
  template: `
    <button
      *ngIf="options.closeButton"
      (click)="remove()"
      type="button"
      class="toast-close-button"
      aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
      {{ title }}
      <ng-container *ngIf="duplicatesCount"
        >[{{ duplicatesCount + 1 }}]</ng-container
      >
    </div>
    <div
      *ngIf="message && options.enableHtml"
      role="alertdialog"
      aria-live="polite"
      [class]="options.messageClass"
      [innerHTML]="message"></div>
    <div
      *ngIf="message && !options.enableHtml"
      role="alertdialog"
      aria-live="polite"
      [class]="options.messageClass"
      [attr.aria-label]="message">
      {{ message }}
    </div>
    <div class="text-right b1-medium b1-italic b1-mt-4">
      {{ 'shared.details' | translate }}
    </div>
    <div *ngIf="options.progressBar">
      <div class="toast-progress" [style.width]="width + '%'"></div>
    </div>
  `,
  animations: [
    trigger('flyInOut', [
      state('inactive', style({ opacity: 0 })),
      state('active', style({ opacity: 1 })),
      state('removed', style({ opacity: 0 })),
      transition(
        'inactive => active',
        animate('{{ easeTime }}ms {{ easing }}')
      ),
      transition('active => removed', animate('{{ easeTime }}ms {{ easing }}')),
    ]),
  ],
  preserveWhitespaces: false,
})
export class CustomToast implements OnDestroy {
  showDetailsCallback?: () => void;
  message?: string | null;
  title?: string;
  options: IndividualConfig;
  duplicatesCount!: number;
  originalTimeout: number;
  /** width of progress bar */
  width = -1;
  /** a combination of toast type and options.toastClass */
  @HostBinding('class') toastClasses = '';
  /** controls animation */
  @HostBinding('@flyInOut')
  state = {
    value: 'inactive',
    params: {
      easeTime: this.toastPackage.config.easeTime,
      easing: 'ease-in',
    },
  };

  /** hides component when waiting to be displayed */
  @HostBinding('style.display')
  get displayStyle(): string | undefined {
    if (this.state.value === 'inactive') {
      return 'none';
    }

    return;
  }

  private timeout: any;
  private intervalId: any;
  private hideTime!: number;
  private sub: Subscription;
  private sub1: Subscription;
  private sub2: Subscription;
  private sub3: Subscription;

  constructor(
    protected toastrService: ToastrService,
    public toastPackage: ToastPackage,
    protected ngZone?: NgZone
  ) {
    this.message = toastPackage.message;
    this.title = toastPackage.title;
    this.options = toastPackage.config;
    this.originalTimeout = toastPackage.config.timeOut;
    this.toastClasses = `${toastPackage.toastType} ${toastPackage.config.toastClass}`;
    this.sub = toastPackage.toastRef.afterActivate().subscribe(() => {
      this.activateToast();
    });
    this.sub1 = toastPackage.toastRef.manualClosed().subscribe(() => {
      this.remove();
    });
    this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(() => {
      this.resetTimeout();
    });
    this.sub3 = toastPackage.toastRef.countDuplicate().subscribe((count) => {
      this.duplicatesCount = count;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    clearInterval(this.intervalId);
    clearTimeout(this.timeout);
  }

  showDetails(): void {
    if (this.showDetailsCallback) {
      this.showDetailsCallback();
    }
  }
  /**
   * activates toast and sets timeout
   */
  activateToast() {
    this.state = { ...this.state, value: 'active' };
    if (
      !(
        this.options.disableTimeOut === true ||
        this.options.disableTimeOut === 'timeOut'
      ) &&
      this.options.timeOut
    ) {
      this.outsideTimeout(() => this.remove(), this.options.timeOut);
      this.hideTime = new Date().getTime() + this.options.timeOut;
      if (this.options.progressBar) {
        this.outsideInterval(() => this.updateProgress(), 10);
      }
    }
  }
  /**
   * updates progress bar width
   */
  updateProgress() {
    if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
      return;
    }
    const now = new Date().getTime();
    const remaining = this.hideTime - now;
    this.width = (remaining / this.options.timeOut) * 100;
    if (this.options.progressAnimation === 'increasing') {
      this.width = 100 - this.width;
    }
    if (this.width <= 0) {
      this.width = 0;
    }
    if (this.width >= 100) {
      this.width = 100;
    }
  }

  resetTimeout() {
    clearTimeout(this.timeout);
    clearInterval(this.intervalId);
    this.state = { ...this.state, value: 'active' };

    this.outsideTimeout(() => this.remove(), this.originalTimeout);
    this.options.timeOut = this.originalTimeout;
    this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
    this.width = -1;
    if (this.options.progressBar) {
      this.outsideInterval(() => this.updateProgress(), 10);
    }
  }

  /**
   * tells toastrService to remove this toast after animation time
   */
  remove() {
    if (this.state.value === 'removed') {
      return;
    }
    clearTimeout(this.timeout);
    this.state = { ...this.state, value: 'removed' };
    this.outsideTimeout(
      () => this.toastrService.remove(this.toastPackage.toastId),
      +this.toastPackage.config.easeTime
    );
  }
  @HostListener('click')
  tapToast() {
    if (this.state.value === 'removed') {
      return;
    }
    this.toastPackage.triggerTap();
    if (this.options.tapToDismiss) {
      this.remove();
    }
    this.showDetails();
  }
  @HostListener('mouseenter')
  stickAround() {
    if (this.state.value === 'removed') {
      return;
    }
    clearTimeout(this.timeout);
    this.options.timeOut = 0;
    this.hideTime = 0;

    // disable progressBar
    clearInterval(this.intervalId);
    this.width = 0;
  }
  @HostListener('mouseleave')
  delayedHideToast() {
    if (
      this.options.disableTimeOut === true ||
      this.options.disableTimeOut === 'extendedTimeOut' ||
      this.options.extendedTimeOut === 0 ||
      this.state.value === 'removed'
    ) {
      return;
    }
    this.outsideTimeout(() => this.remove(), this.options.extendedTimeOut);
    this.options.timeOut = this.options.extendedTimeOut;
    this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
    this.width = -1;
    if (this.options.progressBar) {
      this.outsideInterval(() => this.updateProgress(), 10);
    }
  }

  outsideTimeout(func: () => any, timeout: number) {
    if (this.ngZone) {
      this.ngZone.runOutsideAngular(
        () =>
          (this.timeout = setTimeout(
            () => this.runInsideAngular(func),
            timeout
          ))
      );
    } else {
      this.timeout = setTimeout(() => func(), timeout);
    }
  }

  outsideInterval(func: () => any, timeout: number) {
    if (this.ngZone) {
      this.ngZone.runOutsideAngular(
        () =>
          (this.intervalId = setInterval(
            () => this.runInsideAngular(func),
            timeout
          ))
      );
    } else {
      this.intervalId = setInterval(() => func(), timeout);
    }
  }

  private runInsideAngular(func: () => any) {
    if (this.ngZone) {
      this.ngZone.run(() => func());
    } else {
      func();
    }
  }
}
