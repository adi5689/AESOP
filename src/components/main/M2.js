/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../../css/m2.css';
import Side1 from '../../assets/side1.jpg';


const M2 = () => {
  return (
    <div className='m2'>
        <div className='m2-container'>
            <div className="left-side">
                <h3>The Athenaeum</h3>
                <h2>The warm-up</h2>
                <p>In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months.</p>
                <button className='left-btn'>Read More              <span          >&rarr;</span></button>
            </div>
            <div className='right-side'>
                <img src={Side1} />
            </div>
            
        </div>
    </div>
  )
}

export default M2;