import React from 'react';
import './initialScreen.css';

export function InitialScreen() {
  return (
    <div className='split-screen'>
      <div className='half blue letter'>
        <div className='test'>
          <p className='orangeLetter'>FIND</p>
          <p className='orangeLetter'>NEXT</p>
        </div>
      </div>
      <div className='half orange letter'>
        <div className='test'>
          <p className='blueLetter'>YOUR</p>
          <p className='blueLetter'>HOME</p>
        </div>
      </div>
    </div>
  );
}
