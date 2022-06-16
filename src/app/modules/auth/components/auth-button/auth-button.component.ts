import { Component } from '@angular/core';

import { BaseButtonComponent } from '@ui/base-button.component';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss'],
})
export class AuthButtonComponent extends BaseButtonComponent {
  onClick(): void {
    this.btnClick.emit();
  }
}
