import * as React from 'react';
import { Observable } from 'rxjs/Observable';
import { propsToStream } from '../../src/React/PropsToStream';
import { StreamToComponent } from '../../src/React/StreamToComponent';

export type TestPropsType = {
  count: number;
};
export type TestStreamPropsType = {
  stream?: Observable<number>;
};

class InternalTestClass extends React.Component<TestPropsType & TestStreamPropsType> {
  render() {
    const {
      stream,
    } = this.props;

    return stream ? (
      <StreamToComponent<number>
        stream={stream}
      >
        {value => {
          return (
            <p> Got value: {value} </p>
          );
        }}
      </StreamToComponent>
    ) : <p> no stream </p>;
  }
}

const TestClass = propsToStream<number, TestPropsType>(
  props => props.count,
)(InternalTestClass);

export type StateType = {
  count: number;
};
export class TestPropsToStream extends React.Component<{}, StateType> {
  state = {
    count: 0,
  };
  interval?: NodeJS.Timer;
  increaseCount() {
    const {
      count,
    } = this.state;
    this.setState({ count: count + 1 });
  }
  componentDidMount() {
    // tslint:disable no-this-assignment
    // const self = this;
    this.interval = setInterval(

      () => this.increaseCount(),
      100,
    );
  }
  render() {
    return (
      <div>
      <TestClass
        count={this.state.count}
      />
      {this.state.count}
      </div>
    );
  }
}
