import { StatementModalConfig } from '@models/statement-modal-config.model';
import { CardStatementModalResult } from './card-statement-modal-result.model';

export interface CardStatementModalConfig extends StatementModalConfig {
  callbackCard: (result: CardStatementModalResult) => void;
}
