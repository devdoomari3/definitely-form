import { CreateField } from './CreateField';
import { FormSpecBase } from './FormSpecBase';

export type GetFields<FormSpec extends FormSpecBase> = (
  createField: CreateField,
) => FormSpec;
