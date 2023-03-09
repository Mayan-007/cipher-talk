import React from 'react'
import { ChatRightQuote } from 'react-bootstrap-icons'
import NavbarComponent from './NavbarComponent'

const About = () => {
    return (
        <div>
            <NavbarComponent />
            <div
                className="d-flex justify-content-center align-items-center flex-column"
                style={{ backgroundImage: `url(images/Hacker2.jpg)`, backgroundSize: 'cover', height: '694.4px' }}
            >
                <h1 className="text-white mb-3">About CipheTalk <ChatRightQuote /></h1>
                <p className="text-white mb-5 w-50 text-center">Cipher Talk is a secure messaging app designed to protect users' privacy and sensitive information. It is built using end-to-end encryption, which means that only the sender and recipient of a message can access its contents. Cipher Talk also supports self-destructing messages, which automatically delete after a specified time period, adding an extra layer of security to the app. The app is available for both iOS and Android devices and has a user-friendly interface. Cipher Talk is an excellent choice for individuals and organizations looking for a secure messaging app that ensures the confidentiality and integrity of their conversations.</p>
            </div>
        </div>
    )
}

export default About
