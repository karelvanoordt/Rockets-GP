import React from 'react';
import MissionProfile from '../missionProfile';

const missionProfile = (
  <MissionProfile />
);

it('renders correctly', () => {
  expect(missionProfile).toMatchSnapshot();
});
