import styled from 'styled-components';

export const Container = styled.div`
	border: 1px solid black;
	padding: 5% 1rem;
	width: 100%;
	height: calc(100vh - 5rem);
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
`;

export const PostContainer = styled.div`
	border: 3px solid white;
	border-radius: 0.7rem;
	width: 35vw;
	min-width: 15rem;
	background-color: #ffffff82;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding: 1rem;
`;
