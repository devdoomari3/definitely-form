import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { EventStreams } from './EventStreams';
import { FormState } from './FormState';
import { BaseErrorValuesType, DefaultErrorValuesType } from './types/ErrorValueType';
import { EventHandlers } from './types/EventHandler';
import { FormSpecBase } from './types/FormSpecBase';
export declare type StreamValidatorFactory<FormSpec extends FormSpecBase, ErrorValues extends BaseErrorValuesType<FormSpec>> = (formState: Observable<FormState<FormSpec>>, eventStreams: EventStreams<FormSpec>) => Observable<ErrorValues | null>;
export declare class RxJSStateManager<FormSpec extends FormSpecBase, ErrorValues extends BaseErrorValuesType<FormSpec> = DefaultErrorValuesType<FormSpec>> {
    initialValues: Partial<FormData>;
    errors?: ErrorValues;
    fieldsSpec: FormSpec;
    inputEventHandlers: EventHandlers<FormSpec>;
    eventStreams: EventStreams<FormSpec>;
    errorStream: Observable<ErrorValues | null>;
    formStateStream: BehaviorSubject<FormState<FormSpec>>;
    constructor(args: {
        initialValues?: Partial<FormData>;
        fieldsSpec: FormSpec;
        toStreamValidator: StreamValidatorFactory<FormSpec, ErrorValues>;
    });
    private createEventHandlersFor;
}
