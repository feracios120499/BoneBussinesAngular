import { ServerError } from './server-error.model';

export class DemoError extends ServerError {
  /**
   *
   */
  constructor() {
    super(400, 'Ця функція не підтримується в демонстраційному режимі');
  }
}
