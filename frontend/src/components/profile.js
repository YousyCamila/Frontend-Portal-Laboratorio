import React from 'react'

function Profile() {
    return (
        <div className="row" style={{ margin: '20px' }}>
            <div className="col" style={{ padding: '0px' }}>
                <img src='./assets/portrait-man-laughing.jpg' alt="Usuario" style={{ width: '200px', height: '200px', borderRadius: '15px'}} />
                <h2>Hola!</h2>
                <h3>Bienvenid@ a portal</h3>
            </div>
        </div>
    )
}

export default Profile