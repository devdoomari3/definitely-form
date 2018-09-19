import { Observable } from 'rxjs/Observable';
import {
  RxJSStateManager,
  StreamValidatorFactory,
} from './RxJSStateManager';
import { createField } from './types/CreateField';
import {
  FormData,
} from './types/FormData';
import { FormSpecBase } from './types/FormSpecBase';
import { GetFields } from './types/GetFields';

export function createFieldsGroup<
  FormSpec extends FormSpecBase,
>(
  getFields: GetFields<FormSpec>,
  initialValues?: FormData<FormSpec>,
) {
  const fieldsSpec = getFields(createField);
  type fieldsSpec = typeof fieldsSpec;

  function withRxjsManager<
    DerivedState, ExternalState = undefined,
  >(args: {
    externalStateStream?: Observable<ExternalState>;
    toStreamValidator: StreamValidatorFactory<FormSpec, DerivedState, ExternalState>;
  }) {
    const {
      toStreamValidator,
      externalStateStream = new Observable<ExternalState>(),
    } = args;

    return new RxJSStateManager<
      FormSpec,
      DerivedState,
      ExternalState
    >({
      initialValues,
      fieldsSpec,
      toStreamValidator,
      externalStateStream,
    });
  }

  return {
    withRxjsManager,
    fieldsSpec,
  };
}
