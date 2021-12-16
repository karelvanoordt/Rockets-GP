import React from 'react';
import Navbar from '../navbar';

const navbar = (
        <Navbar />
)

it('renders correctly', () => {
   expect(navbar).toMatchSnapshot();
});