import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <>
      <footer className='Footer'>
        <div className='Footer__links'>
          <div className='Footer__links__left'>
            <div className='Footer__links__left__title'>Products</div>
            <div className='Footer__links__left__element'>Tiramisu chocolate</div>
            <div className='Footer__links__left__element'>Plastry tart</div>
            <div className='Footer__links__left__element'>Pllipop brownie</div>
          </div>
          <div className='Footer__links__right'>
            <div className='Footer__links__right__title'>Collaboration</div>
            <div className='Footer__links__right__element'>Tiramisu chocolate</div>
            <div className='Footer__links__right__element'>Plastry tart</div>
            <div className='Footer__links__right__element'>Pllipop brownie</div>
          </div>
        </div>
        <div className='Footer__icons'>
          <div className='Footer__icons_element'></div>
          <div className='Footer__icons_element'></div>
          <div className='Footer__icons_element'></div>
          <div className='Footer__icons_element'></div>
          <div className='Footer__icons_element'></div>
        </div>

        <div className='Footer__bottom'>
          <div className='Footer__bottom__copyright'>© 2003 - 2022 Carrot cake sweet pie Sp. z o.o. All rights reserved.</div>
          <div className='Footer__bottom_links'>
            <div className='Footer__bottom__link'>Legal</div>
            <div className='Footer__bottom__link'>Privacy policy</div>
            <div className='Footer__bottom__link'>Proud to be Open Source</div>
          </div>
        </div>
      </footer>
    </>
  )
}
