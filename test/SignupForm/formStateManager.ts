// import { FromObservable } from 'rxjs/observable/FromObservable';
// import { combineLatest } from 'rxjs/operators/combineLatest';
// import { filter } from 'rxjs/operators/filter';
import { map } from 'rxjs/operators/map';
import {
  createFormState,
} from '../../src/getStateManager';
import {
  BaseUsernameError,
  UsernameTooShort,
} from './UsernameErrors';

export const formStateManager = createFormState(
  f => ({
    name: f<string>(),
    age: f<string, number>(Number),
  }),
).withRxjsManager<{
  name: BaseUsernameError | undefined | boolean;
  age: string | number | null;
}>({
  toStreamValidator(
    formStateStream,
    // eventStreams,
  ) {
    // const nameChangeStream = eventStreams
    //                           .changeStreams
    //                           .name;

    // nameChangeStream
    return formStateStream.pipe(
      map(
        formState => {
          const {
            values,
          }  = formState;
          const nameShort = (typeof values.name === 'string') &&
                              values.name.length < 5;

          return {
            name: nameShort && new UsernameTooShort(),
            age: null,
          };
        },
      ),
    );
  },
});
