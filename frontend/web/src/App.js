import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Chatboard from './components/Chatboard/Chatboard'
import Home from './components/Home/Home'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/auth" element={<Auth />} />
				<Route exact path="/chatboard" element={<Chatboard />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
