import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
	PostForm,
	FormInput,
	FormTextArea,
	FormSubmit,
	FormTitle,
} from './FormStyles';

const Form = () => {
	const schema = yup.object().shape({
		title: yup.string().required('No Title No Post...'),
		description: yup.string().required('No Description No Post...'),
	});

	const {} = useForm({
		resolver: yupResolver(schema),
	});
	return (
		<PostForm>
			<FormTitle>Feeling creative?</FormTitle>
			<FormInput placeholder="Title ..." />
			<FormTextArea placeholder="Description ..." />
			<FormSubmit type={'submit'} value="create" />
		</PostForm>
	);
};

export default Form;

// 19.40
