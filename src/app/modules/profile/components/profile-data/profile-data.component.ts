import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserSelectors } from '@store/user/selectors';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss'],
})
export class ProfileDataComponent implements OnInit {
  constructor(private store: Store) {}

  avatar$ = this.store.select(UserSelectors.userPicture);
  defaultAvatar$ = this.store.select(UserSelectors.defaultPicture);
  ngOnInit(): void {}

  onAvatarError(event: any): void {
    event.target.src = environment.defaultUserPictureUrl;
  }
}
