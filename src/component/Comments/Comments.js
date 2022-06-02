import React, { useRef } from 'react'
import './Comments.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse,faBell,faHand, faCheck} from '@fortawesome/free-solid-svg-icons'
import {Object} from '../Object/Object'
import Reply from './Reply/Reply';
function Comments({comments,el,objectnewArr,setComments,setnewcomment,newcomment}) {
  let commentref = useRef(null)
  let [status, setStatus] = useState("")
  let [newstatus, setNewStatus] = useState(el)
  let addonchange = (e) => {
    setStatus(e.target.value)
  }
 let addHendler = () => {
    setNewStatus([{
        desc:status,
        img:"https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
        name:"Ulugbek",
        time:"1 min ago",
    },...newstatus])
    setStatus("")
    commentref.current.value = ""
}
let closeHendler = () => {
  setComments(false)
}
setnewcomment(newstatus.length)
// console.log(newstatus.length);
  return (
        <div className='comments-info'>
            <div className={`comments ${comments ? "comments-show" : ""}`}>
              <div className='df ai between comments__header'>
                  <p className='comments___titlenum'>Responses <span className='comments__title-span'>(8)</span></p>
                  <div className='df ai'>
                    <i className='bx bx-check-shield'></i>
                    <i className='bx bx-x' onClick={closeHendler}></i>
                  </div>
              </div>
              <div className='comments__infoo'>
                  <div className='df ai'>
                    <button className='comments__icon-btn'>U</button>
                    <p className='comments__name'>Ulugbek</p>
                  </div>
                  <textarea ref={commentref} id='comment=textarea' className='comments__textarea' placeholder='What are you thought' value={status} onChange={addonchange}></textarea>
                  <div className='comments__input-info'>
                      <div className='comments__font df ai'>
                          <p className='comments__bold'>B</p>
                          <p className='comments__italic'>i</p>
                      </div>
                      <div className='df ai'>
                          <button className='comments__camcel'>Cancel</button>
                          <button className='comments__respond' onClick={addHendler}>Respond</button>
                      </div>
                  </div>
              </div>
              <div className='comments__checked'>
                  <input className='comments__checkbox' type="checkbox" />
                  <p className='comments__check-text'>Also publish to my profile</p>
              </div>
              <div className='comments__most'>
                  <p className='comments__most-text'>MOST RELEVANT</p>
                  <i className='bx bx-chevron-down'></i>
              </div>

                {
                   newstatus.map(item => {
                     return  <div className='comment-bigcontent'> 
                          <Reply item={item} objectnewArr={objectnewArr} objreplayName={objectnewArr.replyArr} />
                      </div>
                    })
                }

            </div>
        </div>
    )
}

export default Comments
