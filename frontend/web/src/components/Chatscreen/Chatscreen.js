import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Chats from './Chats'
import Chatboard from './Chatboard'

const Chatscreen = () => {
	const styles = {
		chats: {
			backgroundColor: '#F4F4F4',
			height: '100vh',
		},
		chatboard: {
			backgroundColor: '#F8F8F8',
			height: '100vh',
		}
	}
	return (
		<Row>
			<Col md={4} style={styles.chats}>
				<Chats />
			</Col>
			<Col md={8} style={styles.chatboard}>
				<Chatboard />
			</Col>
		</Row>
	)
}

export default Chatscreen
