import React, { useState, useEffect } from 'react';
import { FaUserAstronaut } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { auth } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

import {
	Container,
	NavItem,
	UserContainer,
	Icon,
	Icon2,
	NameContainer,
} from '../NavStyles';

const Nav = () => {
	const [user, loading, error] = useAuthState(auth);
	const logout = async () => {
		await signOut(auth);
	};

	return (
		<Container>
			<NavItem to={'/'}>Home</NavItem>
			<NavItem to={'/login'}>Login</NavItem>
			<UserContainer>
				<Icon>
					<FaUserAstronaut />
				</Icon>
				<NameContainer>
					{user?.displayName || 'Not Logged IN'}
				</NameContainer>
				<Icon2>
					<BiLogOut onClick={logout} />
				</Icon2>
			</UserContainer>
		</Container>
	);
};

export default Nav;
