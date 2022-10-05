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
          <div className='DropDown__drop__element__left__number'>01.</div>
          <div className="DropDown__drop__element">
            <details close>
              <summary>Arcu non odio</summary>
              <div className='DropDown__drop__element__left__subtitle'>Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium.</div>
            </details>
          </div>

          <div className='DropDown__drop__element__left__number'>02.</div>
          <div className="DropDown__drop__element">
            <details close>
              <summary>Eget gravida cum</summary>
              <div className='DropDown__drop__element__left__subtitle'>Curabitur in ligula dictum, hendrerit est eget, pretium lorem.
</div>
            </details>
          </div>

          <div className='DropDown__drop__element__left__number'>03.</div>
          <div className="DropDown__drop__element">
            <details close>
              <summary>Massa massa</summary>
              <div className='DropDown__drop__element__left__subtitle'>Donec aliquam, velit venenatis eleifend tincidunt.
</div>
            </details>
          </div>
        </div>
      </div>
    </>
  )
}
