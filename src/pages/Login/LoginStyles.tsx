import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	min-height: calc(100vh - 5rem);
	padding: 1rem;
`;

export const SignInWrapper = styled.div`
	overflow: hidden;
	position: absolute;
	right: 10%;
	background-color: #ffffffb0;
	border-radius: 0.7rem;
	width: 35vw;
	min-width: 20rem;
	min-height: 70vh;
	box-shadow: 0px 0px 15px 12px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
`;
export const TopWrapper = styled.div`
	padding: 3rem;
	padding-bottom: 1rem;
`;

export const Title = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
	color: #4789df;
	text-align: right;
`;

export const MiddleWrapper = styled.div`
	margin-top: 5rem;
`;

export const SignInElement = styled.div`
	position: relative;
	height: 5rem;
	margin-top: 1rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;
export const Decoration = styled.div`
	position: absolute;
	width: 100%;
	bottom: 0;
	height: 2px;
	background-color: #4789df;
`;

export const Input = styled.input`
	background-color: transparent;
	outline: none;
	margin-left: 0.5rem;
	font-size: 1.4rem;
`;
export const Icon = styled.span`
	font-size: 2rem;
	margin-left: 1rem;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 2rem;
`;
export const Button = styled.button`
	color: white;
	font-size: 1.4rem;
	letter-spacing: 0.03rem;
	font-weight: bold;
	padding: 1.5rem 2rem;
	background-color: #4789df;
	border-radius: 0.7rem;
	width: 100%;
	cursor: pointer;
	transition: all ease 0.3rem;
	&:hover {
		background-color: #283c48;
	}
`;
export const GoogleWrapper = styled.div`
	padding: 1rem;
`;
export const Text = styled.p`
	text-align: center;
	font-size: 1.2rem;
	font-weight: 500;
	color: #4789df;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all ease 0.3rem;
	&:hover {
		color: #283c48;
	}
`;
export const SmallIcon = styled.span`
	font-size: 1.4rem;
	margin-left: 0.5rem;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const BottomWrapper = styled.div`
	flex: 2;
	background-color: #000000b0;
`;
