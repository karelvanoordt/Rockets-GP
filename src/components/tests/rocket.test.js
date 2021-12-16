import React from 'react';
import Rocket from '../rocket';

const rocket = (
  <Rocket />
);

it('renders correctly', () => {
  expect(rocket).toMatchSnapshot();
});
