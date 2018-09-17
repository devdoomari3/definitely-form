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
          touched,
          values,
          errors,
        }) => {
          console.log('errors', errors);

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
                {touched.name ?
                  errors && errors.name && errors.name.name
                  : '-'
                }
              </p>
              <p> {values.name} </p>
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
