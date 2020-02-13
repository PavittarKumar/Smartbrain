import React from 'react';
import Tilt  from 'react-tilt';
import './Logo.css';
import brain from './Brain.png'

const Logo =() =>{
    return(
        <div className='ma4 mt0 '>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3"  onClick="https://www.instagram.com/pavittar_19/">
                <img style={{paddingTop: '18px'}} alt='logo' src={brain} title="https://www.instagram.com/pavittar_19/"/>
            </div>
            </Tilt>
        </div>
    );
}

export default Logo;