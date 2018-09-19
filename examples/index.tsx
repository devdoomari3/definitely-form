import * as React from 'react';
import {
  render,
} from 'react-dom';
import { SignupView } from './SignupForm';
import { TestPropsToStream } from './TestReact/TestPropsToStream';

render(
  <div>
    <p> SignUp View </p>
    <SignupView
    />
    <p> Test Props to Stream </p>
    <TestPropsToStream />
  </div>,
  document.getElementById('app'),
);
