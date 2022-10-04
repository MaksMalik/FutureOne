import React from 'react'
import "./StartPage.css"

export default function StartPage() {
  return (
    <>
      <section className='StartPage'>
        <div className='StartPage__left'>
          <div className='StartPate__left__title'>
            <span className='StartPage__left__title__green'>Duis aute irure</span>
            <span className="StartPage__left__title__black"> dolor in reprehenderit</span>
          </div>
          <p className='StartPage__left__subtitle'>Nam at lectus urna duis convallis. Id semper risus in hendrerit gravida rutrum quisque non tellus. Elit eget gravida cum sociis natoque. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Arcu felis bibendum ut tristique et egestas. </p>
          <div className='StartPage__left__button'>Discover now</div>
        </div>
        <img
          className='StartPage__right'
          src={require('./images/StartPage_image.png')}
          alt='Woman'
        />
      </section>
    </>
  )
}
