import React from 'react';

import { Container, NavItem } from '../NavStyles';

const Nav = () => {
	return (
		<Container>
			<NavItem to={'/'}>Home</NavItem>
			<NavItem to={'/login'}>Login</NavItem>
		</Container>
	);
};

export default Nav;
