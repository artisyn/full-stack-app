import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../index.css';

export const Container = styled.div`
	position: relative;
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

export const UserContainer = styled.div`
	position: absolute;
	right: 3%;
	min-width: 10rem;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.5rem;
`;

export const Icon = styled.span`
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Icon2 = styled.span`
	font-size: 1.3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all ease 0.3s;
	&:hover {
		color: #0b6580;
	}
`;
export const NameContainer = styled.span`
	font-size: 1.3rem;
	font-weight: bold;
	font-style: italic;
	color: #4055637a;
	transition: all ease 1s;
`;
