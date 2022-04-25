import { Component } from '@angular/core';
import { BaseButtonComponent } from 'src/app/@shared/components/base-button.component';

@Component({
  selector: 'auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss'],
})
export class AuthButtonComponent extends BaseButtonComponent {
  onClick(): void {
    this.btnClick.emit();
  }
}
