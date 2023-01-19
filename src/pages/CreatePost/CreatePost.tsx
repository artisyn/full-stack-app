import React from 'react';
import Form from './Form';
import { Container, PostContainer } from './CreatePostStyles';

const CreatePost = () => {
	return (
		<Container>
			<PostContainer>
				<Form></Form>
			</PostContainer>
		</Container>
	);
};

export default CreatePost;
