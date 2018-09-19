import { RxJSStateManager, StreamValidatorFactory } from './RxJSStateManager';
import { FormData } from './types/FormData';
import { FormSpecBase } from './types/FormSpecBase';
import { GetFields } from './types/GetFields';
export declare function createFormState<FormSpec extends FormSpecBase>(getFields: GetFields<FormSpec>, initialValues?: FormData<FormSpec>): {
    withRxjsManager: <DerivedState>(args: {
        toStreamValidator: StreamValidatorFactory<FormSpec, DerivedState>;
    }) => RxJSStateManager<FormSpec, DerivedState>;
};
