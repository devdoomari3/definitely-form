import {
  FieldSpec,
} from './FieldSpec';

export function createField<
  FieldValue = string,
  FieldValueParsed = FieldValue
>(
  parse?: (value: FieldValue) => FieldValueParsed,
): FieldSpec<FieldValue, FieldValueParsed> {
  return {parse} as any;
}

export type CreateField = typeof createField;
