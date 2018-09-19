import { FieldSpec } from './FieldSpec';
export declare type ValueProperty<T> = T extends FieldSpec<infer U, any> ? U : never;
export declare type ParsedValueProperty<T> = T extends FieldSpec<any, infer U> ? U : never;
