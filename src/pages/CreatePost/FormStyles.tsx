import styled from 'styled-components';

export const PostForm = styled.form`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: left;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
`;
export const FormTitle = styled.h2`
	color: #29506c;
`;
export const FormInput = styled.input`
	width: 70%;
	height: 3rem;
	padding: 1rem 0.5rem;
	outline: none;
	border: 2px solid blueviolet;
	border-radius: 0.7rem;
	font-size: 1.4rem;
	font-weight: 500;
	font-style: italic;
`;
export const FormTextArea = styled.textarea`
	width: 70%;
	padding: 1rem 0.5rem;
	min-height: 10rem;
	outline: none;
	border: 2px solid blueviolet;
	border-radius: 0.7rem;
	font-size: 1.3rem;
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #29506c;
`;

export const FormSubmit = styled.input`
	width: 70%;
	height: 3rem;
	outline: none;
	border: 2px solid blueviolet;
	border-radius: 0.7rem;
	font-size: 1.6rem;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #29506c;
	cursor: pointer;
	transition: all ease 0.3s;
	&:hover {
		background-color: #892be23d;
	}
`;
