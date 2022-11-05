import React from 'react'
import profile__img from '../images/IMG_0408.jpg'
import share_button from '../images/_Avatar share button desktop.svg';
import Icon_mobile from '../images/_Avatar share button mobile.svg';

function Profile() {
    return (
        <header className="text-center fw-bold">
            <div className='share__icons text-end'>
                <img src={share_button} alt='icon' className='d-none d-md-block desk-icon'/>
                <img src={Icon_mobile} alt='icon' className='d-md-none mobile-icon'/>
            </div>
            <img 
                src={profile__img} 
                alt="profile__img" 
                id="profile__img"
                className="m-4"
            />
            <p id="twitter" className="mb-4">Destiny Arupi</p>
            {/* uncomment to display on screen */}
            {/* <p id="slack" className="mb-4">Destiny Arupi</p> */}
        </header>
    )
}

export default Profile