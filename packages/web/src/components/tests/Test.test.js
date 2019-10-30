import React from 'react';
import { create } from 'react-test-renderer';
import Test from '../Test';

describe('Examining the syntax of Jest tests', () => {
  it('renders without crashing', () => {
    const container = create(<Test />, document.getElementById('root'));
    const instance = container.getInstance();
    console.log(instance.state);
    expect(instance.state.test === 'test');
  });
});
