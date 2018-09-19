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

export function createFormState<
  FormSpec extends FormSpecBase,
>(
  getFields: GetFields<FormSpec>,
  initialValues?: FormData<FormSpec>,
) {
  const fieldsSpec = getFields(createField);
  type fieldsSpec = typeof fieldsSpec;

  function withRxjsManager<DerivedState>(args: {
    toStreamValidator: StreamValidatorFactory<FormSpec, DerivedState>;
  }) {
    const {
      toStreamValidator,
    } = args;

    return new RxJSStateManager<
      FormSpec,
      DerivedState
    >({
      initialValues,
      fieldsSpec,
      toStreamValidator,
    });
  }

  return {
    withRxjsManager,
  };
}
