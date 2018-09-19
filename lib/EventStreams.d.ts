import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormSpecBase } from './types/FormSpecBase';
export declare type EventStreams<FormSpec extends FormSpecBase> = {
    focusStreams: {
        [key in keyof FormSpec]: BehaviorSubject<boolean>;
    };
    changeStreams: {
        [key in keyof FormSpec]: BehaviorSubject<FormSpec[key] | null>;
    };
};
export declare function createEventStreams<FormSpec extends FormSpecBase>(fieldsSpec: FormSpec): EventStreams<FormSpec>;
