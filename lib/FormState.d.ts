import { FormData } from './types/FormData';
import { FormSpecBase } from './types/FormSpecBase';
export declare type FormState<FormSpec extends FormSpecBase> = {
    active: keyof FormSpec | null;
    touched: {
        [key in keyof FormSpec]?: boolean;
    };
    edited: {
        [key in keyof FormSpec]?: boolean;
    };
    values: Partial<FormData<FormSpec>>;
    isInvalid?: boolean;
};
