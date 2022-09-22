import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

import {
	Container,
	SignInWrapper,
	Title,
	MiddleWrapper,
	SignInElement,
	Decoration,
	Input,
	Icon,
	BottomWrapper,
	TopWrapper,
	Button,
	ButtonWrapper,
} from './LoginStyles';

const Login = () => {
	return (
		<Container>
			<SignInWrapper>
				<TopWrapper>
					<Title>Sign In</Title>

					<MiddleWrapper>
						<SignInElement>
							<Icon>
								<FaUser />
							</Icon>
							<Input type={'text'} placeholder="User Name" />
							<Decoration />
						</SignInElement>

						<SignInElement>
							<Icon>
								<FaLock />
							</Icon>
							<Input type={'text'} placeholder="Password" />
							<Decoration />
						</SignInElement>
						<ButtonWrapper>
							<Button>Login</Button>
						</ButtonWrapper>
					</MiddleWrapper>
				</TopWrapper>
				<BottomWrapper></BottomWrapper>
			</SignInWrapper>
		</Container>
	);
};

export default Login;
