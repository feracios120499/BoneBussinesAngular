import { CardLimit } from '@models/cards/card-limit.model';

export interface EditLimitConfig {
  limit: CardLimit;
  callbackSave: (limit: CardLimit) => void;
}
