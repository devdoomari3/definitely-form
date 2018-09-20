import * as React from 'react';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

export type PropsType<T> = {
  stream: Observable<T>;
  children(value?: T): React.ReactElement<any>;
};
export type StateType<T> = {
  value?: T;
};
export class StreamToComponent<T> extends React.Component<PropsType<T>, StateType<T>> {
  state: StateType<T> = {
  };
  subscription?: Subscription;
  componentDidMount() {
    this.subscribe();
  }
  componentDidUpdate(prevProps: PropsType<T>) {
    if (prevProps.stream !== this.props.stream) {
      this.unsubscribe();
      this.subscribe();
    }
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const {
      value,
    } = this.state;

    return value ? this.props.children(value) : null;
  }
  private subscribe() {
    this.subscription = this.props.stream
                          .subscribe(
                            value => this.setState({value}),
                          );
  }
  private unsubscribe() {
    this.subscription && this.subscription.unsubscribe();
  }
}
