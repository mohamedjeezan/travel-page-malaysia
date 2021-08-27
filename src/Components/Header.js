import React from 'react';
import { Button } from './Button';
import './Header.css'
import '../App.css'

function Header() {
    return (
        <div className='header-container'>
            <video src='../videos/video-1.mp4' autoPlay loop muted/>
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <div className='header-btns'>
                <Button 
                className='btn'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Get Started
                </Button>

                <Button 
                className='btn'
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    Watch Trailer <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default Header
