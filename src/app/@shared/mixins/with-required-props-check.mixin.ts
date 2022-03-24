import { TGConstructor } from './g-constructor.type';

export function withRequiredPropsCheck<T extends TGConstructor<{}>>(base: T = (class {} as any)) {
  abstract class RequiredPropsCheckable extends base {
    protected checkRequiredProps(props: string[]): void {
      for (const prop of props) {
        if (!this.hasOwnProperty(prop)) {
          throw new Error(`Attribute "${prop}" is required.`);
        }
      }
    }
  };

  return RequiredPropsCheckable;
}
