import React from 'react';
import RocketProfile from '../rocketProfile';

const rocketProfile = (
  <RocketProfile />
);

it('renders correctly', () => {
  expect(rocketProfile).toMatchSnapshot();
});
