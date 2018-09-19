import * as React from 'react';
import { FormStateManagerType } from '.';
import { ReactComponent } from '../../src/React';
export type PropsType = {
  stateManager: FormStateManagerType;
};

export const SignupForm: React.StatelessComponent<PropsType> =
  props => {
    return (
      <ReactComponent
        stateManager={props.stateManager}
      >
        {({
          inputEventHandlers,
          touched,
          values,
          derivedState,
        }) => {
          return (
            <div>

              <input
                type='text'
                {...inputEventHandlers.name}
                value={values.name || ''}
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
                  derivedState && derivedState.name && derivedState.name.message
                  : '-'
                }
              </p>
              <p
                style={{
                  color: 'purple',
                }}
              >
                {
                  derivedState && derivedState.name && derivedState.name.message

                }
              </p>
              <p> {values.name} </p>
            </div>
          );
        }}
      </ReactComponent>
    );
  };
