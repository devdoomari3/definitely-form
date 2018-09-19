// import { FromObservable } from 'rxjs/observable/FromObservable';
// import { combineLatest } from 'rxjs/operators/combineLatest';
// import { filter } from 'rxjs/operators/filter';
import { map } from 'rxjs/operators/map';
import {
  createFieldsGroup,
} from '../../src/getStateManager';
import {
  BaseUsernameError,
  UsernameTooShort,
} from './UsernameErrors';

export function createFormStateManager() {
  const fieldsGroup = createFieldsGroup(
    f => ({
      name: f<string>(),
      age: f<string, number>(Number),
    }),
  );

  return fieldsGroup.withRxjsManager<{
    name: BaseUsernameError | null;
    age: string | number | null;
  }>({
    toStreamValidator(
      formStateStream,
      // eventStreams,
    ) {
      return formStateStream.pipe(
        map(
          formState => {
            const {
              values,
            }  = formState;
            const nameShort = (typeof values.name === 'string') &&
                                values.name.length < 5;

            return {
              name: nameShort ? new UsernameTooShort() : null,
              age: null,
            };
          },
        ),
      );
    },
  });
}
