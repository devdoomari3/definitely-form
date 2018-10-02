import { FieldSpec } from './FieldSpec';
export declare function createField<FieldValue = string, FieldValueParsed = FieldValue>(parse?: (value: FieldValue) => FieldValueParsed): FieldSpec<FieldValue, FieldValueParsed>;
export declare type CreateField = typeof createField;
