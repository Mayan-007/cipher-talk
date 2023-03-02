import React from 'react'

const UserProfile = () => {
    const styles = {
        imageHolder: {
            width: '150px',
            height: '150px',
            border: '1px solid #000',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto'
        },
        image: {
            width: '150px',
            height: '150px',
        },
        statusbar: {
            width: '150px',
            backgroundColor: '#C3EFD2',
            color: '#27AD55',
        }
    }
    return (
        <div className="d-flex flex-column align-items-center">
            <div className="rounded-circle mt-5" style={styles.imageHolder}>
                <span><img style={styles.image} src="images/Hacker.jpg" /></span>
            </div>
            <h5 className="text-center mt-3 rounded pb-1" style={styles.statusbar}>Active</h5>
        </div>
    )
}

export default UserProfile
