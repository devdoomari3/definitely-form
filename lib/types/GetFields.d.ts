import { CreateField } from './CreateField';
import { FormSpecBase } from './FormSpecBase';
export declare type GetFields<FormSpec extends FormSpecBase> = (createField: CreateField) => FormSpec;
