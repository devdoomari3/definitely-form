import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { EventStreams } from './EventStreams';
import { FormState } from './FormState';
import { EventHandlers } from './types/EventHandler';
import { FormSpecBase } from './types/FormSpecBase';
export declare type StreamValidatorFactory<FormSpec extends FormSpecBase, DerivedState, ExternalState> = (formStateStream: Observable<FormState<FormSpec>>, eventStreams: EventStreams<FormSpec>, externalStateStream: Observable<ExternalState>) => Observable<DerivedState | null>;
export declare class RxJSStateManager<FormSpec extends FormSpecBase, DerivedState, ExternalState> {
    initialValues: Partial<FormData>;
    derivedState?: DerivedState | null;
    fieldsSpec: FormSpec;
    inputEventHandlers: EventHandlers<FormSpec>;
    eventStreams: EventStreams<FormSpec>;
    derivedStateStream: Observable<DerivedState | null>;
    formStateStream: BehaviorSubject<FormState<FormSpec>>;
    constructor(args: {
        initialValues?: Partial<FormData>;
        fieldsSpec: FormSpec;
        toStreamValidator: StreamValidatorFactory<FormSpec, DerivedState, ExternalState>;
        externalStateStream: Observable<ExternalState>;
    });
    private createEventHandlersFor;
}
