import React from 'react'
import './GLibrary.css';


const GLibrary = (props) => {
  return (
    <div className='g-library'>
    <img src={props.imageG} />
    <div className='g-text-content'>
        <h3>fortnite</h3>
        <p>Sandbox</p>
    </div>
    <div className='g-text-content'>
        <h3>fortnite</h3>
        <p>Sandbox</p>
    </div>
    <div className='g-text-content'>
        <h3>fortnite</h3>
        <p>Sandbox</p>
    </div>
    <div className='g-text-content'>
        <h3>fortnite</h3>
        <p>Sandbox</p>
    </div>
    <button>download</button>
</div>
  )
}

export default GLibrary
