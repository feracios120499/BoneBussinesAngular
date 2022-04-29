import { Injectable } from '@angular/core';
import { CardStatus } from '@b1-types/card-status.type';
import { CardType } from '@b1-types/card-type.type';
import { PlasticStatus } from '@b1-types/plastic-status.type';
import { Store } from '@ngrx/store';
import { AppSelectors } from '@store/app/selectors';
import { SettingsSelectors } from '@store/settings/selectors';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomCardsService {
  constructor(private store: Store) {}
  getType(cardType: CardType): string {
    switch (cardType) {
      case 'MasterCard':
        return 'mastercard';
      case 'Visa':
        return 'visa';
      case 'Prostir':
        return 'prostir';
      default:
        return cardType.toString();
    }
  }

  getBackgroundColor(type: PlasticStatus | CardStatus): string {
    if (type == 'Active') {
      return 'b1-bg-success';
    }
    if (type == 'Blocked') {
      return 'b1-bg-error';
    }
    if (type == 'Closed') {
      return 'b1-bg-light-500';
    }
    if (type == 'NotActive') {
      return 'b1-bg-light-500';
    }
    if (type == 'UserBlocked') {
      return 'b1-bg-info';
    }
    if (type == 'Undefined') {
      return 'b1-bg-warning';
    }

    return 'b1-bg-info';
  }

  getIcon(type: PlasticStatus | CardStatus | CardType): string {
    if (type == 'Active') {
      return 'check';
    }
    if (type == 'Blocked') {
      return 'lock';
    }
    if (type == 'UserBlocked') {
      return 'lock';
    }
    if (type == 'Closed') {
      return 'not-allowed';
    }
    if (type == 'NotActive') {
      return 'not-allowed';
    }
    if (type == 'MasterCard') {
      return 'mastercard';
    }
    if (type == 'Visa') {
      return 'visa';
    }

    return '';
  }

  getImage(type: CardType, selected = false): Observable<string> {
    return this.store.select(SettingsSelectors.darkMode).pipe(
      map((darkMode) => {
        if (selected) {
          if (type == 'MasterCard') {
            return '../../../../assets/img/master-card-white.svg';
          }
          if (type == 'Visa') {
            return '../../../../assets/img/visa-card-white.svg';
          }
          if (type == 'Prostir') {
            return '../../../../assets/img/prostir-card-white.svg';
          }
        } else {
          if (type == 'MasterCard') {
            return darkMode
              ? '../../../../assets/img/master-card-white.svg'
              : '../../../../assets/img/master-card-color.svg';
          }
          if (type == 'Visa') {
            return darkMode
              ? '../../../../assets/img/visa-card-white.svg'
              : '../../../../assets/img/visa-card-color.svg';
          }
          if (type == 'Prostir') {
            return darkMode
              ? '../../../../assets/img/prostir-card-white.svg'
              : '../../../../assets/img/prostir-card-color.svg';
          }
        }
        return '';
      })
    );
  }
}
