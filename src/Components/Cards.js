import React from 'react';
import CardItems from './CardItems';
import './Cards.css';
import waterfall from '../images/waterfall.jpg';
import surfing from '../images/surfing.jpg';
import drawing from '../images/drawing.jpg';
import china from '../images/china.jpg';
import srilanka from '../images/srilanka.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItems 
                        src={waterfall}
                        text='Explore the hidden mountains deep inside Surabaya'
                        label='Hiking'/>

                        <CardItems 
                        src={surfing}
                        text='Learn more about ski'
                        label='Surfing'/>

                        <CardItems 
                        src={drawing}
                        text='Always try something new while travelling'
                        label='Try Something New'/>
                    </ul>
                    <ul className='cards__items'>
                        <CardItems 
                        src={china}
                        text='Explore more and get more friends'
                        label='Friends Forever'/>

                        <CardItems 
                        src={srilanka}
                        text='Find more secrets abouts wonders of the world'
                        label='Wonders of Wolrd'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
