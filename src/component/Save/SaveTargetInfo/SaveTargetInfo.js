import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Comments from '../../Comments/Comments'
import Menu from '../../Menu/Menu'
import Sidebar from '../../Sidebar/Sidebar'
import './SaveTargetInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse,faBell,faHand} from '@fortawesome/free-solid-svg-icons'

function SaveTargetInfo({modalobjtwo,setComments,comments,savetarget}) {
 let [arrrr, setarrrrr] = useState([savetarget])
  let location = useLocation()
  let location1 = location.pathname.split('/').at(-1)
  let commentsHendler = (e) => {
    setComments(!comments)
  }
  let okki = () => {
    console.log(arrrr);
  }

  return (
    <div className='savetargetinfo'>
        <Menu/>
      <div className='savetargetinfo__content'>
        <div className='savetargetinfo__subcontext'>
          <div className='savetargetinfo__header'>
            <button className='savetargetinfo__icon-btn'onClick={okki}>U</button>
            <div className='savetargetinfo__df'>
              <p className='savetargetinfo__name' onClick={okki}>Ulugbek</p>
              <p className='savetargetinfo__date'>may 31</p>
            </div>
          </div>
          <div className='moreabout__navbar'>
            <i className='bx moreicons bxl-twitter' ></i>
            <i className='bx moreicons bxl-facebook-circle' ></i>
            <i className='bx moreicons bxl-linkedin-square' ></i>
            <i className='bx moreicons bx-dots-horizontal-rounded' ></i>
          </div>
        </div>
        {
          modalobjtwo.map(item => {
            if(+location1 === item.id){
              return <p className='savetargetinfo__category-name'>{item.category}</p>
            }
          })
        }

        {
          arrrr.map(item => {
            return <div className='mt'>
            <div className='reacommend-content'>
            <div className='reacommend__header'>
              <img className='reacommend__icon' src={item.icon} alt=""/>
              <p className='reacommend__name'> {item.name}</p>
              <p className='reacommend__time'>1</p>
            </div>
            <div className='reacommend__info'>
              <div className='reacommend__subinfo rscinfo'>
                <div className='recomment-link'>
                  <div className='reacommend__description'>
                    <h2 className='reacommend__title'>{item.category}</h2>
                  </div>
                </div>
                <p>{item.desc}</p>
                 <div className='reacommend__sidebar'>
                  <div className='reacommend__firstsidebar'>
                    <span className='reacommend__category'>{item.category}</span>
                    <span className='reacommend__read'>12</span>
                    <span className='reacommend__selected-text'>Selected for you</span>
                  </div>
                  <div className='reacommend__sidebar-bookm'>
                      <i className='bx bx-bookmark'></i>
                                  
                      <i className='bx bx-dots-horizontal-rounded'></i>
                  </div>
                </div>
              </div>
              <img className='reacommend__img reimg' src={item.img} alt="" />
            </div>
          
          </div>
            </div>
          })
        }
        <div className='savetargetinfo__recommend'>
          <p className='savetargetinfo__recommendtext'>Add your favorite stories to your list. Simply click the  on any Medium story to get started.</p>
        </div>
      </div>
        <Sidebar/>
        {/* <Comments comments={comments} setComments={setComments} /> */}
    </div>
  )
}

export default SaveTargetInfo














