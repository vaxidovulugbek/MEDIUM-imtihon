import React from 'react'
import Menu from '../Menu/Menu'
import Sidebar from '../Sidebar/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import './Stories.css'
function Stories({published,storyText}) {
  return (
    <div className='stories'>
      <Menu/>
      <div className='stories__content'>
        <div className='stories__subcontent'>
          <p className='stories__title'>Your stories</p>
          <div className='stories__btn-group'>
            <button className='stories__btn'>Write a story</button>
            <button className='stories__btnimport'>Import a story</button>
          </div>
        </div>
        <div className='stories__nav'>
          <p className='stories__nav-items navactive'>Drafts 2</p>
          <p className='stories__nav-items'>Published 2</p>
          <p className='stories__nav-items'>Responses</p>
        </div>
        {
          storyText.map(item => {
            return <div className='stories__moreinfo'>
            <div className='stories__info'>
              <h1>{item.title}</h1>
              <p className='stories__name'>{item.text}</p>
              <div className='stories__info-context'>
                <p className='stories__info-text'>Published less than a minute ago · 1 min read</p>
                <FontAwesomeIcon className='stories__info-icon' icon={faArrowUpRightFromSquare} />
                <i className='bx bx-dots-horizontal-rounded'></i>
              </div>
            </div>
            
          </div>

          })
        }
      </div>
      <Sidebar/>
    </div>
  )
}

export default Stories