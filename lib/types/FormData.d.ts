import { ParsedValueProperty, ValueProperty } from './ExtractType';
import { FormSpecBase } from './FormSpecBase';
export declare type FormDataParsed<FormSpec extends FormSpecBase> = {
    [key in keyof FormSpec]: ParsedValueProperty<FormSpec[key]>;
};
export declare type FormData<FormSpec extends FormSpecBase> = {
    [key in keyof FormSpec]: ValueProperty<FormSpec[key]>;
};
