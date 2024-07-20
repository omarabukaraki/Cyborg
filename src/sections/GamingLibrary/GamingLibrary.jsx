import React from 'react';
import './GamingLibrary.css';
import { GLibrary } from '../../components';
import game_1 from '../../assets/images/game-01.jpg';
import game_2 from '../../assets/images/game-02.jpg';
import game_3 from '../../assets/images/game-03.jpg';



const GamingLibrary = () => {
    return (
        <div className='game-library-section'>
            <div className='game-section-header'>
                <h4><span>Your Gaming</span> Library</h4>
            </div>
            <div className='g-libraries'>
                <GLibrary imageG={game_1}/>
                <GLibrary imageG={game_2}/>
                <GLibrary imageG={game_3}/>
            </div>
        </div>
    )
}

export default GamingLibrary



