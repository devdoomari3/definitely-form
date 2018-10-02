import * as React from 'react';

import {
  createFormStateManager,
} from './createFormStateManager';
import { SignupForm } from './SignupForm';

const formStateManager = createFormStateManager();
export type FormStateManagerType = typeof formStateManager;

export const SignupView: React.StatelessComponent<{}> = props => {
  return (
    <div>
      <SignupForm stateManager={formStateManager} />
      <button onClick={() => {
        console.log(formStateManager.formStateStream.value);
        console.log(formStateManager.derivedState);
      }}>
        log!
      </button>
    </div>
  );
};
