import React from 'react'
import { Plus } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import NavbarComponent from './NavbarComponent'

const Home = () => {
    return (
        <div>
            <NavbarComponent />
            <div
                className="d-flex justify-content-center align-items-center flex-column"
                style={{ backgroundImage: `url(images/Hacker2.jpg)`, backgroundSize: 'cover', height: '694.4px' }}
            >
                <h1 className="text-white mb-1">Join the conversation</h1>
                <p className="text-white mb-3">Connect with people from all around the world.</p>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn btn-lg btn-primary mr-3 mx-2">
                        <Link to="/auth" className='text-white'>Join</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
