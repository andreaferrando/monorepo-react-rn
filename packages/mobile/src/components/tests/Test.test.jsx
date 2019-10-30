import React from 'react';
import renderer from 'react-test-renderer';
import Test from '../Test';

test('Link changes the class when hovered', () => {
  const container = renderer.create(<Test />);
  const instance = container.getInstance();
  expect(instance.state.text === 'test');
});
