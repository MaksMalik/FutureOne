import React from 'react'
import "./Header.css"

export default function Header() {
  
  return (
    <>
      <header className='Header'>
        <div className='Header_flex'>

        <div className='Header__navbar'>
          <div className='Header__navbar__left'>
            <div className='Header__navbar__left__element'>Overview</div>
            <div className='Header__navbar__left__element'>About</div>
            <div className='Header__navbar__left__element'>Resources</div>
            <div className='Header__navbar__left__element'>Network</div>
            <div className='Header__navbar__left__element'>Cloud</div>
            <div className='Header__navbar__left__element'>Download</div>
            <div className='Header__navbar__left__element'>Contact</div>
          </div>
          <div className='Header__navbar__right'>Contact Us</div>
        </div>
        <div className='Header__title'>Future one</div>
        </div>
      </header>

      <nav>
        <div className="Header__navbar__mobile">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox"/>
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="Header__title">
              <h1>Future one</h1>
            </div>
            <div className="menu-items">
              <li>Overview</li>
              <li>About</li>
              <li>Resources</li>
              <li>Network</li>
              <li>Cloud</li>
              <li>Download</li>
              <li>Contact</li>

            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
