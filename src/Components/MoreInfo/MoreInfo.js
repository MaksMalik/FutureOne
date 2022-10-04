import React from 'react'
import "./MoreInfo.css"

export default function MoreInfo() {
  return (
    <>
      <div className='MoreInfo'>
        <div className='MoreInfo__top'>
          <div className='MoreInfo__top__title'>Massa tempor nec feugiat nisl pretium fusce</div>
          <div className='MoreInfo__top__subtitle'>
            Pellentesque <b>habitant</b> morbi tristique senectus et netus et malesuada. <b>Ipsum faucibus vitae</b> aliquet nec ullamcorper sit amet risus nullam.
            <br/>Dictum varius duis at consectetur <b>lorem donec</b> massa sapien. Massa tempor nec feugiat nisl pretium fusce.

            <br/><br/>Elit scelerisque mauris pellentesque?</div>
        </div>
        <div className='MoreInfo__bottom__all'>

        <div className='MoreInfo__bottom'>
          <div className='MoreInfo__bottom__box'></div>
          <div className='MoreInfo__bottom__box'></div>
        </div>
        <div className='MoreInfo__bottom'>
          <div className='MoreInfo__bottom__box'></div>
          <div className='MoreInfo__bottom__box'></div>
          </div>
        </div>
      </div>
    </>
  )
}
