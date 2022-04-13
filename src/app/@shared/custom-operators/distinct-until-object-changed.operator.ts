import { OperatorFunction, pipe } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

export function distinctUntilObjectChanged(): OperatorFunction<any, any> {
  return pipe(
    distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b))
  );
}
