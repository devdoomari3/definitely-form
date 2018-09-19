import * as React from 'react';
import { combineLatest } from 'rxjs/operators/combineLatest';
import { Subscription } from 'rxjs/Subscription';
import { FormState } from '../FormState';
import { RxJSStateManager } from '../RxJSStateManager';
import { EventHandlers } from '../types/EventHandler';
import { FormSpecBase } from '../types/FormSpecBase';

export type PropsType<
  FormSpec extends FormSpecBase,
  DerivedState,
  ExternalState = undefined,
> = {
  stateManager: RxJSStateManager<
    FormSpec,
    DerivedState,
    ExternalState
  >;
  children(props: {
    inputEventHandlers: EventHandlers<FormSpec>;
    derivedState?: DerivedState | null;
  } & FormState<FormSpec>): React.ReactElement<any>;
};

export type StateType<
  FormSpec extends FormSpecBase,
  DerivedState,
> = {
  formState?: FormState<FormSpec>;
  derivedState?: DerivedState | null;
};
export class ReactComponent<
  FormSpec extends FormSpecBase,
  DerivedState,
> extends React.Component<
  PropsType<
    FormSpec,
    DerivedState
  >,
  StateType<
    FormSpec,
    DerivedState
  >
> {
  subscription?: Subscription;
  state: StateType<FormSpec, DerivedState> = {};
  componentDidMount() {
    // subscribe to stateManager.
    const {
      stateManager,
    } = this.props;
    this.subscription = stateManager
                .formStateStream
                .pipe(
                  combineLatest(
                    stateManager.derivedStateStream,
                    (formState, derivedState) => ({
                      formState, derivedState,
                    }),
                  ),
                )
                .subscribe(({
                  formState,
                  derivedState,
                }) => {
                  this.setState({
                    formState,
                    derivedState,
                  });
                });
  }
  componentWillUnmount() {
    // unsubscribe to stateManager.
    this.subscription &&
      this.subscription.unsubscribe();
  }
  render() {
    const {
      stateManager,
    } = this.props;
    const {
      inputEventHandlers,
    } = stateManager;

    const {
      formState,
      derivedState,
    } = this.state;

    return this.props.children({
      inputEventHandlers,
      derivedState,
      ...{
        touched: {},
        active: {},
        edited: {},
        values: {},
        parsedValues: {},
      } as FormState<FormSpec>,
      ...formState,
    });
  }
}
