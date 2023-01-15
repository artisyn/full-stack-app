import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { auth, provider } from '../../config/firebase';
import { signInWithPopup } from 'firebase/auth';

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
	GoogleWrapper,
	Text,
	SmallIcon,
} from './LoginStyles';

const Login = () => {
	const signInWithGoogle = async () => {
		console.log('google');
		const result = await signInWithPopup(auth, provider);
		console.log(result);
	};
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
					<GoogleWrapper>
						<Text onClick={signInWithGoogle}>
							Sign In With Google
							<SmallIcon>
								<FcGoogle />
							</SmallIcon>
						</Text>
					</GoogleWrapper>
				</TopWrapper>
				<BottomWrapper></BottomWrapper>
			</SignInWrapper>
		</Container>
	);
};

export default Login;
