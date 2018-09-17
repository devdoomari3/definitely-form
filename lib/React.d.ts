import * as React from 'react';
import { Subscription } from 'rxjs/Subscription';
import { FormState } from './FormState';
import { RxJSStateManager } from './RxJSStateManager';
import { BaseErrorValuesType } from './types/ErrorValueType';
import { EventHandlers } from './types/EventHandler';
import { FormSpecBase } from './types/FormSpecBase';
export declare type PropsType<FormSpec extends FormSpecBase, ErrorValues extends BaseErrorValuesType<FormSpec>> = {
    stateManager: RxJSStateManager<FormSpec, ErrorValues>;
    children(props: {
        inputEventHandlers: EventHandlers<FormSpec>;
        errors?: ErrorValues | null;
    } & FormState<FormSpec>): React.ReactElement<any>;
};
export declare type StateType<FormSpec extends FormSpecBase, ErrorValues extends BaseErrorValuesType<FormSpec>> = {
    formState?: FormState<FormSpec>;
    errors?: ErrorValues | null;
};
export declare class ReactComponent<FormSpec extends FormSpecBase, ErrorValues extends BaseErrorValuesType<FormSpec>> extends React.Component<PropsType<FormSpec, ErrorValues>, StateType<FormSpec, ErrorValues>> {
    subscription?: Subscription;
    state: StateType<FormSpec, ErrorValues>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<any>;
}
