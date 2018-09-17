import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormSpecBase } from './types/FormSpecBase';
import { mapObject } from './utils/ObjectMap';

export type EventStreams<FormSpec extends FormSpecBase> = {
  focusStreams: {
    [key in keyof FormSpec]: BehaviorSubject<boolean>;
  };
  changeStreams: {
    [key in keyof FormSpec]: BehaviorSubject<FormSpec[key] | null>;
  };
};

export function createEventStreams<
  FormSpec extends FormSpecBase
> (
  fieldsSpec: FormSpec,
): EventStreams<FormSpec> {
  const focusStreams = mapObject(
    () => (new BehaviorSubject<boolean>(false)),
    fieldsSpec,
  );
  const changeStreams = mapObject(
    (fieldSpec, key) => (
      new BehaviorSubject<FormSpec[typeof key] | null>(null)
    ),
    fieldsSpec,
  );

  return {
    focusStreams,
    changeStreams,
  };
}
