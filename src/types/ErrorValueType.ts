import { FormSpecBase } from './FormSpecBase';

export type BaseErrorValuesType<FormSpec extends FormSpecBase> = {
  [key in keyof FormSpec]: any;
};

export type DefaultErrorValuesType<FormSpec extends FormSpecBase> = {
  [key in keyof FormSpec]: string;
};
