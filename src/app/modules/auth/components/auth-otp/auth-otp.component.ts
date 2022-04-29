import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AuthSelectors } from '@modules/auth/store/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'auth-otp',
  templateUrl: './auth-otp.component.html',
  styleUrls: ['./auth-otp.component.scss'],
})
export class AuthOtpComponent implements OnInit {
  LENGTH_OTP = 6;
  constructor(private store: Store) {}

  loading$ = this.store.select(AuthSelectors.isLoading);
  error$ = this.store.select(AuthSelectors.error);
  otp = '';

  @Input() phone: string | undefined | null = '';
  @Output() sendOtp = new EventEmitter<string>();

  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: this.LENGTH_OTP,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {},
  };

  onOtpChange(otp: string): void {
    this.otp = otp;
  }

  onSendOtp(): void {
    this.sendOtp.emit(this.otp);
    this.otp = '';
    this.ngOtpInput.setValue(this.otp);
  }

  ngOnInit(): void {}
}
