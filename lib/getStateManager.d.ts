import { Observable } from 'rxjs/Observable';
import { RxJSStateManager, StreamValidatorFactory } from './RxJSStateManager';
import { FormData } from './types/FormData';
import { FormSpecBase } from './types/FormSpecBase';
import { GetFields } from './types/GetFields';
export declare function createFieldsGroup<FormSpec extends FormSpecBase>(getFields: GetFields<FormSpec>, initialValues?: FormData<FormSpec>): {
    withRxjsManager: <DerivedState, ExternalState = undefined>(args: {
        externalStateStream?: Observable<ExternalState> | undefined;
        toStreamValidator: StreamValidatorFactory<FormSpec, DerivedState, ExternalState>;
    }) => RxJSStateManager<FormSpec, DerivedState, ExternalState>;
    fieldsSpec: FormSpec;
};
