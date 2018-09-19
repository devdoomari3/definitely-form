import * as React from 'react';
import { Subscription } from 'rxjs/Subscription';
import { FormState } from '../FormState';
import { RxJSStateManager } from '../RxJSStateManager';
import { EventHandlers } from '../types/EventHandler';
import { FormSpecBase } from '../types/FormSpecBase';
export declare type PropsType<FormSpec extends FormSpecBase, DerivedState, ExternalState = undefined> = {
    stateManager: RxJSStateManager<FormSpec, DerivedState, ExternalState>;
    children(props: {
        inputEventHandlers: EventHandlers<FormSpec>;
        derivedState?: DerivedState | null;
    } & FormState<FormSpec>): React.ReactElement<any>;
};
export declare type StateType<FormSpec extends FormSpecBase, DerivedState> = {
    formState?: FormState<FormSpec>;
    derivedState?: DerivedState | null;
};
export declare class ReactComponent<FormSpec extends FormSpecBase, DerivedState, ExternalState = undefined> extends React.Component<PropsType<FormSpec, DerivedState>, StateType<FormSpec, DerivedState>> {
    subscription?: Subscription;
    state: StateType<FormSpec, DerivedState>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<any>;
}
