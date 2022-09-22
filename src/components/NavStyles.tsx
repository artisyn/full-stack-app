import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../index.css';

export const Container = styled.div`
	padding: 1rem;
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;
export const NavItem = styled(Link)`
	outline: none;
	text-decoration: none;
	font-size: 1.3rem;
	font-weight: bold;
	color: #283c48;
	transition: all ease 0.3s;
	&:hover {
		color: #4055637a;
	}
`;
