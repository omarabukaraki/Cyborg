
import React from 'react';
import './MostPopular.css';
import Card from '../../components/Card/Card';
import popular_01 from '../../assets/images/popular-01.jpg';
import popular_02 from '../../assets/images/popular-02.jpg';
import popular_03 from '../../assets/images/popular-03.jpg';
import popular_04 from '../../assets/images/popular-04.jpg';
import popular_05 from '../../assets/images/popular-05.jpg';
import popular_06 from '../../assets/images/popular-06.jpg';
import popular_07 from '../../assets/images/popular-07.jpg';
import popular_08 from '../../assets/images/popular-08.jpg';




const MostPopular = () => {
    return (
        <div className='section-wrapper'>
            <div className='section-header'>
                <h4><span>MostPopular</span> Right Now</h4>
            </div>
            <div className='most-popular-items'>
                <div className='most-popular-item'>
                    <Card title='Fortnite' image={popular_01} />
                    <Card title='PubG' image={popular_02} />
                    <Card title='Dota2' image={popular_03}/>
                    <Card title='CS-GO' image={popular_04}/>
                    <Card title='Mini Craft' image={popular_05}/>
                    <Card title='Eagles Fly' image={popular_06}/>
                    <Card title='Warface' image={popular_07}/>
                    <Card title='Warcraft' image={popular_08}/>
                </div>
            </div>
        </div>
    )
}

export default MostPopular;
