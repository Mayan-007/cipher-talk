import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Circle, CircleFill } from 'react-bootstrap-icons'

const Chat = () => {
    const styles = {
        searchbar: {
            backgroundColor: '#F2F2F2',
            border: 'none',
            width: '100%',
            height: '50px',
            boxShadow: '0 0 50px 1px rgba(0, 0, 0, 0.2)',
            borderRadius: '20px',
            margin: '10px 0',
        },
        imageHolder: {
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto'
        },
        image: {
            width: '35px',
            height: '35px',
        }
    }

    const clickHandler = () => {
        console.log("clicked")
    }

    return (
        <Col md={12}>
            <div className="d-flex flex-column align-items-center">
                <div className="container ms-1">
                    <Card style={styles.searchbar} onClick={clickHandler}>
                        <Container>
                            <Row className="d-flex justify-content-between mt-2 align-items-center">
                                <Col md={8}>
                                    <Row className="d-flex justify-content-start align-items-center">
                                        <Col md={2}>
                                            <div className="" style={styles.imageHolder}>
                                                <span><img style={styles.image} src="images/Hacker.jpg" /></span>
                                            </div>
                                        </Col>
                                        <Col md={10}>
                                            <h4 className="text-start mx-3" style={{ "fontSize": "20px" }}>Cspit Kalpit Shah</h4>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={4}>
                                    <h4 className="text-end mx-3 fs-6"><CircleFill color='green' /></h4>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </div>
            </div>
        </Col>
    )
}

export default Chat
