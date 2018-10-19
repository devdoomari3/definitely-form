import immer from 'immer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';
import {
  createEventStreams,
  EventStreams,
} from './EventStreams';
import { FormState } from './FormState';
import {
  EventHandler,
  EventHandlers,
} from './types/EventHandler';
import { ValueProperty } from './types/ExtractType';
import { FormSpecBase } from './types/FormSpecBase';
import { mapObject } from './utils/ObjectMap';

export type StreamValidatorFactory<
  FormSpec extends FormSpecBase,
  DerivedState,
  ExternalState,
> = (
  formStateStream: Observable<FormState<FormSpec>>,
  eventStreams: EventStreams<FormSpec>,
  externalStateStream: Observable<ExternalState>,
) => Observable<DerivedState | null>;

export class RxJSStateManager <
  FormSpec extends FormSpecBase,
  DerivedState,
  ExternalState,
> {
  initialValues: Partial<FormData>;
  derivedState?: DerivedState | null;

  fieldsSpec: FormSpec;

  inputEventHandlers: EventHandlers<FormSpec>;

  eventStreams: EventStreams<FormSpec>;
  derivedStateStream: Observable<DerivedState | null>;
  formState?: FormState<FormSpec>;
  formStateStream: BehaviorSubject<FormState<FormSpec>>;

  constructor(args: {
    initialValues?: Partial<FormData>;
    fieldsSpec: FormSpec;
    toStreamValidator:
      StreamValidatorFactory<FormSpec, DerivedState, ExternalState>;
    externalStateStream: Observable<ExternalState>;
  }) {
    const {
      initialValues,
      fieldsSpec,
      externalStateStream,
      toStreamValidator,
    } = args;
    this.eventStreams = createEventStreams(fieldsSpec);
    this.formStateStream = new BehaviorSubject<FormState<FormSpec>>({
      active: null,
      touched: {},
      edited: {},
      values: {},
      parsedValues: {},
    }).pipe(
      tap(formState => this.formState = formState),
    );
    this.derivedStateStream = toStreamValidator(
      this.formStateStream,
      this.eventStreams,
      externalStateStream,
    ).pipe(
      tap(derivedState => this.derivedState = derivedState),
    );

    this.initialValues = initialValues || {};
    this.fieldsSpec = fieldsSpec;

    this.inputEventHandlers = mapObject(
      (value, key) => this.createEventHandlersFor(key, fieldsSpec),
      fieldsSpec,
    );
  }

  private createEventHandlersFor<
    fieldNameType extends keyof FormSpec,
    Value extends ValueProperty<FormSpec[fieldNameType]>
  >(
    fieldName: keyof FormSpec,
    fieldsSpec: FormSpec,
  ): EventHandler<FormSpec, fieldNameType, Value> {
    // tslint:disable no-this-assignment
    const self = this;

    return {
      onBlur() {
        self.formStateStream.next(
          immer(
            self.formStateStream.value,
            formState => {
              formState.active = null;
            },
          ),
        );
        self.eventStreams.focusStreams[fieldName].next(false);
      },
      onFocus() {
        self.formStateStream.next(
          immer(
            self.formStateStream.value,
            (formState)  => {
              const f = formState as FormState<FormSpec>;
              f.touched[fieldName] = true;
              f.active = fieldName;
            },
          ),
        );
        self.eventStreams.focusStreams[fieldName].next(true);
      },
      onChange(value: Value) {
        self.formStateStream.next(
          immer(
            self.formStateStream.value,
            (formState)  => {
              const f = formState as FormState<FormSpec>;
              f.edited[fieldName] = true;
              f.values[fieldName] = value;
              const parser = fieldsSpec[fieldName];
              f.parsedValues[fieldName] = parser.parse && parser.parse(value);
            },
          ),
        );
        self.eventStreams.changeStreams[fieldName].next(value);
      },
    };
  }
}
