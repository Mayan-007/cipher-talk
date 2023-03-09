import { GearWide, PersonPlus, Search } from 'react-bootstrap-icons'
import { useState } from 'react'
import UserProfile from './UserProfile'
import { Row, Col, InputGroup, Button, Form, Dropdown, OverlayTrigger, Popover, Container, ListGroup } from 'react-bootstrap'
import Chat from './Chat'
import { Link } from 'react-router-dom'

const Chats = () => {
	const [chatDisplay, setChatDisplay] = useState(true);
	const styles = {
		searchbar: {
			// make it look like the searchbar in the chat screen
			backgroundColor: '#F2F2F2',
			border: 'none',
			width: '100%',
			height: '50px',
			// blur border
			boxShadow: '0 0 50px 1px rgba(0, 0, 0, 0.2)',
			borderRadius: '20px',
			margin: '10px 0'
		},
		searchbutton: {
			backgroundColor: '#FFFFFF',
			border: 'none',
			color: 'black'
		}
	}
	return (
		<div>
			<Container>
				<Row className="d-flex justify-content-end">
					<Col md={2}>
						<OverlayTrigger
							trigger="click"
							placement="left"
							className="text-end"
							overlay={
								<Popover id="popover-positioned-left">
									<Popover.Body className='p-1'>
										<ListGroup variant='flush'>
											<ListGroup.Item className='text-center'><Link to="/editprofile" className='text-primary'>Edit Profile</Link></ListGroup.Item>
											<ListGroup.Item className='text-center'><Link to="/" className='text-danger'>Logout</Link></ListGroup.Item>
										</ListGroup>
									</Popover.Body>
								</Popover>
							}
						>
							<h2 className="text-end me-2 mt-2" ><GearWide /></h2>
						</OverlayTrigger>
					</Col>
				</Row>
			</Container>
			<div className="d-flex justify-content-center">
				<Row>
					<Col md={12}>
						<UserProfile />
					</Col>
					<Col md={12}>
						<Row>
							<Col md={6}>
								<h4 className="text-start mx-3">Chats</h4>
							</Col>
							<Col md={6}>
								<h4 className="text-end mx-3"><PersonPlus /></h4>
							</Col>
						</Row>
					</Col>
					<Col md={12}>
						<div className="d-flex flex-column align-items-center">
							<div className="container ms-1">
								<InputGroup className="mb-3" style={styles.searchbar}>
									<Form.Control
										style={{ backgroundColor: '#FFFFFF', border: 'none' }}
										placeholder="Search"
									/>
									<Button style={styles.searchbutton}>
										<Search />
									</Button>
								</InputGroup>
							</div>
						</div>
					</Col>
					{chatDisplay ? <Col md={12}>
						<Row style={{ "overflowY": "auto", "maxHeight": "330px" }}>
							<Chat />
							<Chat />
							<Chat />
							<Chat />
							<Chat />
							<Chat />
							<Chat />
							<Chat />
							<Chat />
						</Row>
					</Col>
						: <Col md={12}>
							<div className="d-flex flex-column align-items-center">
								<h4 className="text-center">No chats yet</h4>
								<p className="text-center">Start a new chat or search for an existing one</p>
							</div>
						</Col>}
				</Row>
			</div>
		</div >
	)
}

export default Chats
