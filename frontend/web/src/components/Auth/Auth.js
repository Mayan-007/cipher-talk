import { useState } from "react"
import { Card, Form, Button, FormControl } from "react-bootstrap"
import { Link } from "react-router-dom"
import Login from "./Login"
import Register from "./Register"

const Auth = () => {
	const [page, setPage] = useState('login')
	const handlePage = (page) => {
		setPage(page)
	}
	const styles = {
		background: {
			backgroundImage: `url('images/Hacker.jpg')`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			height: '100vh',
			width: '100vw',
		},
		card: {
			width: '25rem',
			backgroundColor: '#202121',
			color: 'white',
		},
		formControl: {
			backgroundColor: '#2d2e2d',
			color: 'white',
		}
	}
	if(page === 'login') {
		return <Login styles={styles} handlePage={handlePage} />
	} else if(page === 'register') {
		return <Register styles={styles} handlePage={handlePage} />
	}
}

export default Auth
