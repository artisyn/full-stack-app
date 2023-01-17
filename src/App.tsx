import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Nav from './components/nav/Nav';
import CreatePost from './pages/CreatePost/CreatePost';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Login />} />
					<Route path="/createpost" element={<CreatePost />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
