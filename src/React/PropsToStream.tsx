import * as React from 'react';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export type PropsType<T> = {
  value: T;
  children(stream: Observable<T>): React.ReactElement<any>;
};
export class PropsToStream<T> extends React.Component<PropsType<T>> {
  stream: BehaviorSubject<T> = new BehaviorSubject(this.props.value);

  componentDidUpdate() {
    this.stream.next(this.props.value);
  }
  render() {
    return this.props.children(this.stream);
  }
}
