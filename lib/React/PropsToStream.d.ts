import * as React from 'react';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
export declare type PropsType<T> = {
    value: T;
    children(stream: Observable<T>): React.ReactElement<any>;
};
export declare class PropsToStream<T> extends React.Component<PropsType<T>> {
    stream: BehaviorSubject<T>;
    componentDidUpdate(): void;
    render(): React.ReactElement<any>;
}
