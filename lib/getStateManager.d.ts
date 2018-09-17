import { RxJSStateManager, StreamValidatorFactory } from './RxJSStateManager';
import { BaseErrorValuesType, DefaultErrorValuesType } from './types/ErrorValueType';
import { FormData } from './types/FormData';
import { FormSpecBase } from './types/FormSpecBase';
import { GetFields } from './types/GetFields';
export declare function createFormState<FormSpec extends FormSpecBase>(getFields: GetFields<FormSpec>, initialValues?: FormData<FormSpec>): {
    withRxjsManager: <ErrorValues extends BaseErrorValuesType<FormSpec> = DefaultErrorValuesType<FormSpec>>(args: {
        toStreamValidator: StreamValidatorFactory<FormSpec, ErrorValues>;
    }) => RxJSStateManager<FormSpec, ErrorValues>;
};
