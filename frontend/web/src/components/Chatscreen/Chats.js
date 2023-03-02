import { GearWide, PersonPlus, Search } from 'react-bootstrap-icons'
import UserProfile from './UserProfile'
import { Row, Col, InputGroup, Button, Form } from 'react-bootstrap'

const Chats = () => {
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
			<h2 className="text-end me-2 mt-2" ><GearWide /></h2>
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
											style={{backgroundColor: '#FFFFFF', border: 'none'}}
											placeholder="Search"
										/>
										<Button style={styles.searchbutton}>
											<Search />
										</Button>
									</InputGroup>
								</div>
						</div>
					</Col>
					<Col md={12}>
						<div className="d-flex flex-column align-items-center">
							<h4 className="text-center">No chats yet</h4>
							<p className="text-center">Start a new chat or search for an existing one</p>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default Chats
