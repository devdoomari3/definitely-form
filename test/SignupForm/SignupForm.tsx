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
                  errors && errors.name && errors.name.message
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
