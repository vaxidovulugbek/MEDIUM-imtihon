import React from 'react'
import Menu from '../Menu/Menu'
import Sidebar from '../Sidebar/Sidebar'
import './Bell.css'
function Bell() {
  return (
    <div className='bell'>
        <Menu/>
        <div className='bell__content'>
          <h2 className='bell__title'>Notifications</h2>
          <div className='bell__subheader'>
            <p className='bell__all'>All</p>
            <p className='bell__responses'>Responses</p>
          </div>
          <div className='bell__info'>
            <p className='bell__text'>You're all caught up.</p>
            <p className='bell__subtext'>Your stats</p>
          </div>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Bell











