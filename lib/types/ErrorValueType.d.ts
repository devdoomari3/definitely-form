import { FormSpecBase } from './FormSpecBase';
export declare type BaseErrorValuesType<FormSpec extends FormSpecBase> = {
    [key in keyof FormSpec]: any;
};
export declare type DefaultErrorValuesType<FormSpec extends FormSpecBase> = {
    [key in keyof FormSpec]: string;
};
