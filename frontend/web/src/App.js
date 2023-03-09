import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Chatscreen from './components/Chatscreen/Chatscreen'
import EditProfile from './components/EditProfile/EditProfile'
import About from './components/Home/About'
import Home from './components/Home/Home'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/auth" element={<Auth />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/chatboard" element={<Chatscreen />} />
				<Route exact path="/editprofile" element={<EditProfile />} />
				<Route path="*" element={<h1>404 Not Found</h1>} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
