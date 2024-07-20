
import React from 'react';
import './MostPopular.css';
import Card from '../../components/Card/Card';
import MostPopularData from '../../data/MostPopularData';



const MostPopular = () => {


   const cardItem = MostPopularData.map(cardData=>{
    return <Card title={cardData.title} imageM={cardData.imageMostP} />;
   })
    
    return (
        <div className='section-wrapper'>
            <div className='section-header'>
                <h4><span>MostPopular</span> Right Now</h4>
            </div>
            <div className='most-popular-items'>
                <div className='most-popular-item'>
                    {cardItem}
                </div>
            </div>
        </div>
    )
}

export default MostPopular;
