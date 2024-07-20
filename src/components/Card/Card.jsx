
import React from 'react';
import './Card.css';
import { Download,StarFill } from 'react-bootstrap-icons';



const Card = (props) => {
    return (
        <div className='most-popular-item'>
            <div className='card-wrapper'>
                <img className='most-popular-item-image' src={props.imageM} />
                <div className='most-popular-item-content'>
                    <h4 className='most-popular-item-title'>
                        {props.title} <br />
                        <span>Sandbox</span>
                    </h4>
                    <ul>
                        <li><StarFill style={{color:'yellow'}}/> <span>4.8</span></li>
                        <li><Download style={{color:'#ec6090'}}/> <span>2.3M</span></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Card;
