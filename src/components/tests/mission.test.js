import React from 'react';
import Mission from '../mission';

const mission = (
  <Mission />
);

it('renders correctly', () => {
  expect(mission).toMatchSnapshot();
});
