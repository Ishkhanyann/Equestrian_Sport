import React from 'react';
import './Modal.scss';

export default function Modal({ toogleModal, children }) {
  return (
    <div className='Modal'>
      <div className='Modal-body'>
        {children}
      </div>
    </div>
  );
}