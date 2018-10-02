import * as React from 'react';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
export declare type PropsType<ValueType, OriginalPropsType> = {
    mapper(originalProps: Readonly<OriginalPropsType>): ValueType;
    children(stream: Observable<ValueType>): React.ReactElement<OriginalPropsType>;
} & OriginalPropsType;
export declare class PropsToStream<ValueType, OriginalPropsType> extends React.Component<PropsType<ValueType, OriginalPropsType>> {
    stream: BehaviorSubject<ValueType>;
    componentDidUpdate(): void;
    render(): React.ReactElement<OriginalPropsType>;
}
export declare function propsToStream<Value, OriginalProps>(mapper: (props: Readonly<OriginalProps>) => Value): <P extends OriginalProps & {
    stream?: Observable<Value> | undefined;
}>(Component: React.ComponentType<P>) => (props: Readonly<OriginalProps>) => JSX.Element;
