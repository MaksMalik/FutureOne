import React from 'react'
import "./Quote.css"

export default function Quote() {
  return (
    <>
      <div className='Quote'>
        <div className='Quote__left'>
          Bibendum at varius vel pharetra vel turpis nunc eget lorem.
        </div>

        <div className='Quote__right'>
          <div className='Quote__right__quote quote quote2'>Aliquam purus sit amet luctus venenatis lectus magna. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Tortor vitae purus faucibus ornare. Neque viverra justo nec ultrices. Nisl nunc mi ipsum faucibus. Tristique risus nec feugiat in fermentum. Elit duis tristique sollicitudin nibh sit amet commodo nulla.</div>
          <div className='Quote__right__author'>Faucibus Vitae, Office Assistant </div>
          <img
            className='Quote__right__inVision'
            src={require('./images/logo.png')}
            alt='Woman'
          />

        </div>
      </div>
    </>
  )
}
