import * as React from 'react';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export type PropsType<ValueType, OriginalPropsType> = {
  mapper(
    originalProps: Readonly<OriginalPropsType>,
  ): ValueType;
  children(stream: Observable<ValueType>): React.ReactElement<OriginalPropsType>;
} & OriginalPropsType;

export class PropsToStream<
  ValueType,
  OriginalPropsType,
> extends React.Component<PropsType<ValueType, OriginalPropsType>> {
  // mapper: (originalProps: OriginalPropsType) => ValueType;
  stream: BehaviorSubject<ValueType> =
    new BehaviorSubject(this.props.mapper(this.props));

  componentDidUpdate() {
    this.stream.next(this.props.mapper(this.props));
  }
  render() {
    return this.props.children(this.stream);
  }
}

export function propsToStream<Value, OriginalProps>(
  mapper: (props: Readonly<OriginalProps>) => Value,
) {
  type StreamProps = {
    stream?: Observable<Value>;
  };

  return <P extends OriginalProps & StreamProps>(
    Component: React.ComponentType<P> | React.StatelessComponent<P>,
  ) => {
    return (props: Readonly<OriginalProps>) => (
      <PropsToStream
        mapper={mapper}
        {...props}
      >
        {stream => (

          <Component {...props} stream={stream} />
        )}
      </PropsToStream>
    );
  };
}
