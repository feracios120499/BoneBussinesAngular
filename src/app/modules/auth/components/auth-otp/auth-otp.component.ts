import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AuthFacade } from 'src/app/@core/facades/auth.facade';

@Component({
  selector: 'auth-otp',
  templateUrl: './auth-otp.component.html',
  styleUrls: ['./auth-otp.component.scss']
})
export class AuthOtpComponent implements OnInit {

  LENGTH_OTP = 6;
  constructor(private authFacade: AuthFacade) { }

  loading$ = this.authFacade.isLoading$;
  error$ = this.authFacade.errorMessage$;
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
    inputStyles: {
    }
  };

  onOtpChange(otp: string): void {
    this.otp = otp;
  }

  onSendOtp(): void {
    this.sendOtp.emit(this.otp);
    this.otp = '';
    this.ngOtpInput.setValue(this.otp);
  }

  ngOnInit(): void {
  }

}
