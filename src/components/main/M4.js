/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../../css/m4.css';
import SF1 from '../../assets/SF1.png';


const M4 = () => {
  return (
    <div className='m4'>
        <div className='m4-container'>
            <div className="left-side-2">
                <img src={SF1} />
            
            </div>
            <div className='right-side-2'>
                <h2>Post-Poo Drops has returned</h2>
                <p>Here to make the malodorous melodious once again. Dispense this flavoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours. </p>
                <button className='right-btn'>Discover Post-Poo Drops              <span          >&rarr;</span></button>
            </div>
            
        </div>
    </div>
  )
}

export default M4;