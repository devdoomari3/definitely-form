import * as React from 'react';
import {
  render,
} from 'react-dom';
import { ReactComponent } from '../../src/React';
import { formStateManager } from './formStateManager';
export type PropsType = {
};

export const TestForm: React.StatelessComponent<PropsType> =
  props => {
    return (
      <ReactComponent
        stateManager={formStateManager}
      >
        {({
          inputEventHandlers,
          formState,
          errors,
        }) => {
          const {
            touched = {},
          } = formState || {};

          return (
            <div>

              <input
                type='text'
                {...inputEventHandlers.name}
                onChange={
                  (evt) => {
                    inputEventHandlers
                      .name
                      .onChange(evt.target.value);
                  }
                }
              />
              <p
                style={{
                  color: 'red',
                }}
              >
                {touched.name ? 'ok' : 'aa'}
              </p>
            </div>
          );
        }}
      </ReactComponent>
    );
  };

render(
  <TestForm
  />,
  document.getElementById('app'),
);
