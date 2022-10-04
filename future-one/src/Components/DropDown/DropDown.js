import React from 'react'
import './DropDown.css'

export default function DropDown() {

  return (
    <>
      <div className='DropDown'>
        <div className='DropDown__tile' id='discover'>
          Lacinia quis vel eros tempor orci.
        </div>

        <div className='DropDown__drop'>
          <div className='DropDown__drop__element'>
            <div className='DropDown__drop__element__left'>
              <div className='DropDown__drop__element__left__number'>01.</div>
              <div className='DropDown__drop__element__left__title'>Arcu non odio</div>
              <div className='DropDown__drop__element__left__subtitle'>Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium.</div>
            </div>
            <div className='DropDown__drop__element__right__minus'></div>
          </div>

          <div className='DropDown__drop__element'>
            <div className='DropDown__drop__element__left'>
              <div className='DropDown__drop__element__left__number'>02.</div>
              <div className='DropDown__drop__element__left__title'>Eget gravida cum sociis</div>
              <div className='DropDown__drop__element__left__subtitle'>Curabitur in ligula dictum, hendrerit est eget, pretium lorem.</div>
            </div>
            <div className='DropDown__drop__element__right__minus'></div>
          </div>

          <div className='DropDown__drop__element'>
            <div className='DropDown__drop__element__left'>
              <div className='DropDown__drop__element__left__number'>03.</div>
              <div className='DropDown__drop__element__left__title'>Massa massa ultricies </div>
              <div className='DropDown__drop__element__left__subtitle'>Donec aliquam, velit venenatis eleifend tincidunt.</div>
            </div>
            <div className='DropDown__drop__element__right__minus'></div>
          </div>





        </div>
      </div>
    </>
  )
}
