import { FieldSpec } from './FieldSpec';
export declare type FormSpecBase = {
    [FieldName in string]: FieldSpec<any, any>;
};
