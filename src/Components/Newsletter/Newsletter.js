import React from 'react'
import "./Newsletter.css"

export default function Newsletter() {
  return (
    <>
      <div className='Newsletter'>
        <div className='Newsletter__title'>Subscribe to our newsletter</div>
          <form className='Newsletter__form'>
            <input
              aria-label="Company e-mail address"
              placeholder="Company e-mail address"
              type="email"
            />
            <button className='Newsletter__form__button'>Subscribe</button>
          </form>
        <div className='Newsletter__subtitle'>Chupa chups gummi bears shortbread candy </div>

      </div>
    
    </>
  )
}
