import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Nav from './components/nav/Nav';

test('renders learn react link', () => {
	render(<App />);

	expect(<Nav />).toBeInTheDocument();
});
