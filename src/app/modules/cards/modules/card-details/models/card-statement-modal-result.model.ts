import { StatementModalResult } from '@models/statement-modal-result.model';

export interface CardStatementModalResult extends StatementModalResult {
  type: 'card' | 'account';
}
