import { Row, Col } from 'react-bootstrap'

const SingleChat = ({ pos }) => {

    const styles = {
        SingleChat: {
            maxWidth: '20rem',
            height: 'auto',
            boxShadow: '0 0 50px 1px rgba(0, 0, 0, 0.2)',
        }
    }

    return (
        <Row className={`d-flex justify-content-${pos} align-items-center pt-1 pb-1`}>
            <Col md="auto">
                <div className="container ms-1">
                    <div className="d-flex flex-column align-items-center">
                        <div className="container ms-1">
                            <div className="card text-start bg-light mb-3" style={styles.SingleChat}>
                                <div className={`p-1 card-body bg-${pos === 'start'? 'secondary': 'primary'} text-white`}>
                                    <p className={`card-text`}>Hello uysgdq qcs suc sc asic asy ca scya scy ascy asyc asu cuas ca sca sc ac asc as cgascqsuyc us iyycby ccu sc  ac scua cu </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default SingleChat
