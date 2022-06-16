import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { PublicSelectors } from '@store/public/selectors';
import { SharedActions } from '@store/shared/actions';
import { HttpAuthService } from '../../services/auth-service/http-auth.service';

@Component({
  selector: 'app-auth-bcc-dropdown',
  templateUrl: './auth-bcc-dropdown.component.html',
  styleUrls: ['./auth-bcc-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthBccDropdownComponent implements OnInit {
  cloudUrls$: Observable<{ [key: string]: string | undefined }> = this.store.select(PublicSelectors.cloudUrls);
  osName!: string;

  constructor(private store: Store, private httpAuthService: HttpAuthService) {}

  ngOnInit(): void {
    this.osName = this.httpAuthService.device.os;
  }

  downloadFile(url: string): void {
    this.store.dispatch(SharedActions.downloadFileByUrl({ url }));
  }
}
