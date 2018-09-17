import { FieldSpec } from './FieldSpec';

export type FormSpecBase = {
  [FieldName in string]: FieldSpec<any, any>
};
