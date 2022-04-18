import { CardType } from '@b1-types/card-type.type';
import { Dayjs } from 'dayjs';

export interface ReissueApplication {
  accountId: number;
  accountNumber: string;
  cardId: string;
  cardNumber: string;
  cardType: CardType;
  cardOwnerName: string;
  cardExpired: string;
}
