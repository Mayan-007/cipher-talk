import { Col, Row, InputGroup, Form, Button, OverlayTrigger, Popover, ListGroup } from "react-bootstrap"
import { Send, ThreeDots } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import SingleChat from "./SingleChat"

const Chatboard = () => {

    const styles = {
        imageHolder: {
            width: '50px',
            height: '50px',
            border: '1px solid #000',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto'
        },
        image: {
            width: '50px',
            height: '50px',
        },
        header: {
            height: "75px",
            backgroundColor: "#F1F1F1",
        },
        chat: {
            overflowY: "auto",
            height: "575.4px",
            backgroundColor: "#F8F8F8",
        },
        chatInput: {
            height: "100px",
            backgroundColor: "#F1F1F1",
        },
        searchbar: {
            backgroundColor: '#F2F2F2',
            border: 'none',
            width: '100%',
            height: '50px',
            boxShadow: '0 0 50px 1px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px'
        },
        searchbutton: {
            backgroundColor: '#FFFFFF',
            border: 'none',
            color: 'black'
        }
    }

    return (
        <div>
            <Row style={styles.header} className="d-flex justify-content-between align-items-center">
                <Col md={4}>
                    <Row md={12} className="d-flex justify-content-start align-items-center">
                        <Col md={2}>
                            <div className="" style={styles.imageHolder}>
                                <span><img style={styles.image} src="images/Hacker.jpg" /></span>
                            </div>
                        </Col>
                        <Col md={10}>
                            <h4 className="text-start mx-3 mt-3">Cspit Kalpit Shah</h4>
                            <p className="text-start mx-3" style={{ "fontSize": "10px" }}>Active</p>
                        </Col>
                    </Row>
                </Col>
                <Col md="auto">
                    <OverlayTrigger
                        trigger="click"
                        placement="left"
                        className="text-end"
                        overlay={
                            <Popover id="popover-positioned-left">
                                <Popover.Body className='p-1'>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item className='text-center'>Clear chat</ListGroup.Item>
                                        <ListGroup.Item className='text-center'>Delete chat</ListGroup.Item>
                                        <ListGroup.Item className='text-center'>Block user</ListGroup.Item>
                                        
                                    </ListGroup>
                                </Popover.Body>
                            </Popover>
                        }
                    >
                        <h2 className="text-end me-2 mt-2" ><ThreeDots /></h2>
                    </OverlayTrigger>
                </Col>
            </Row>
            <Row style={styles.chat} className="d-flex justify-content-center align-items-end">
                <Col md={11} className=" mt-3 mb-3">
                    <SingleChat pos="start" />
                    <SingleChat pos="end" />
                    <SingleChat pos="start" />
                    <SingleChat pos="end" />
                    <SingleChat pos="start" />
                    <SingleChat pos="end" />
                    <SingleChat pos="start" />
                    <SingleChat pos="end" />
                </Col>
            </Row>
            <Row style={styles.chatInput} className="d-flex justify-content-center align-items-center">
                <Col md={12}>
                    <div className="container ms-1">
                        <InputGroup className="mb-3" style={styles.searchbar}>
                            <Form.Control
                                style={{ backgroundColor: '#FFFFFF', border: 'none' }}
                                placeholder="Type a message..."
                            />
                            <Button style={styles.searchbutton}>
                                <Send />
                            </Button>
                        </InputGroup>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Chatboard
