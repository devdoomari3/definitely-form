import { ValueProperty } from './ExtractType';
import {
  FormSpecBase,
} from './FormSpecBase';

export type EventHandler<
  FormSpec extends FormSpecBase,
  fieldName extends keyof FormSpec,
  value extends ValueProperty<FormSpec[fieldName]>
> = {
  onBlur(): void;
  onFocus(): void;
  onChange(value: value | null): void;
};

export type EventHandlers<
  FormSpec extends FormSpecBase
> = {
  [key in keyof FormSpec]: EventHandler<
                             FormSpec,
                             key,
                             ValueProperty<FormSpec[key]>
                           >;
};
