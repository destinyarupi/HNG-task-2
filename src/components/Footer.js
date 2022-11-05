import React from 'react'
import Zuri_desktop from '../images/Zuri.Internship_Logo desktop.svg';
import Zuri_mobile from '../images/Zuri.Internship_Logo mobile.svg';
import I4G_desktop from '../images/I4G desktop.svg';
import I4G_mobile from '../images/I4G mobile.svg';

function Footer() {
  return (
    <footer>
      <hr />
      <div className='d-flex justify-content-between pb-3 pb-md-5'>
        <img src={Zuri_desktop} alt='Zuri__logo' className='d-none d-md-block' />
        <img src={Zuri_mobile} alt='Zuri__logo' className='d-md-none' />
        <p className='m-0'>HNG Internship 9 Frontend Task</p>
        <img src={I4G_desktop} alt='I4G__logo' className='d-none d-md-block' />
        <img src={I4G_mobile} alt='I4G__logo' className='d-md-none' />
      </div>
    </footer>
  )
}

export default Footer