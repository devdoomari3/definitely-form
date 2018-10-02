import * as React from 'react';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
export declare type PropsType<T> = {
    stream: Observable<T>;
    children(value?: T): React.ReactElement<any>;
};
export declare type StateType<T> = {
    value?: T;
};
export declare class StreamToComponent<T> extends React.Component<PropsType<T>, StateType<T>> {
    state: StateType<T>;
    subscription?: Subscription;
    componentDidMount(): void;
    componentDidUpdate(prevProps: PropsType<T>): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<any> | null;
    private subscribe;
    private unsubscribe;
}
