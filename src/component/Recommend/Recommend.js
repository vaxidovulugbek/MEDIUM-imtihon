import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Object} from '../Object/Object'
import SaveModal from '../Save/SaveModal/SaveModal'
import BookmarkSave from './BookmarkSave/BookmarkSave'
import './Recommend.css'

function Recommend({savetargetwatch,setsavetarget,datain,filtered,type,currentPostspublished,currentPosts,setsavemodal,savemodal,setmodalobjtwo,modalobjtwo,setmodalobj,modalobj,published}) {
  let [ischecedtwo, setischeckedtwo] = useState(false)
  let handleKeyPress = (event) => {
    }
    let createHendlerRecomment = (e) => {
      setsavemodal(false)
    }    
  
  return (
    <div className='reacommend'>
    
      {
        datain.map((item) => {
          return <div className='reacommend-content'>
            <div className='reacommend__header'>
              <img className='reacommend__icon' src={item.icon} alt={item.name} />
              <p className='reacommend__name'>{item.name}</p>
              <p className='reacommend__time'>{item.time}</p>
            </div>
            <div className='reacommend__info'>
              <div className='reacommend__subinfo'>
                <Link className='recomment-link' to={`/moreabout/${item.id}`}>
                  <div className='reacommend__description'>
                    <h2 className='reacommend__title'>{item.title}</h2>
                    <p className='reacommend__desc'>{item.desc}</p>
                  </div>
                </Link>
                 <div className='reacommend__sidebar'>
                  <div className='reacommend__firstsidebar'>
                    <span className='reacommend__category'>{item.category}</span>
                    <span className='reacommend__read'>{item.read}</span>
                    <span className='reacommend__selected-text'>Selected for you</span>
                  </div>
                  <div className='reacommend__sidebar-bookm'>
                      <i id={`${item.id}`} className='bx bx-bookmark' onClick={() =>ischecedtwo !== item.id ?  setischeckedtwo(item.id): setischeckedtwo('')}></i>
                      
                    <BookmarkSave ischecedtwo={ischecedtwo} item={item} modalobjtwo={modalobjtwo} setsavemodal={setsavemodal} setsavetarget={setsavetarget}/>
                      
                      <i className='bx bx-dots-horizontal-rounded'></i>
                  </div>
                </div>
              </div>
              <img className='reacommend__img' src={item.img} alt="" />
            </div>
            <SaveModal  savemodal={savemodal} setsavemodal={setsavemodal} setmodalobj={setmodalobj} modalobj={modalobj} 
                modalobjtwo={modalobjtwo}
                setmodalobjtwo={setmodalobjtwo}/>
          </div>
        })
      }

      {
        savetargetwatch.map(element => {
          return <div className='reacommend-content'>
          <div className='reacommend__header'>
            <img className='reacommend__icon' src="https://kkhotels-ce53.kxcdn.com/wp-content/uploads/2020/01/Paris-City-Eiffeltower-View.jpg" alt={element.name} />
            <p className='reacommend__name'>me </p>
            <p className='reacommend__time'>1mount later</p>
          </div>
          <div className='reacommend__info df between'>
            <div className='reacommend__subinfo width'>
              <Link className='recomment-link' to={`/moreabout/${element.id}`}>
                <div className='reacommend__description'>
                  <h2 className='reacommend__title'>{element.title}</h2>
                  <p className='reacommend__desc'>{element.name} </p>
                </div>
              </Link>
               <div className='reacommend__sidebar df between'>
                <div className='reacommend__firstsidebar'>
                  <span className='reacommend__category'>Front End</span>
                  <span className='reacommend__read'>1</span>
                  <span className='reacommend__selected-text'>Selected for you</span>
                </div>
                <div className='reacommend__sidebar-bookm '>
                    <i className='bx bx-bookmark' onClick={() =>ischecedtwo !== element.id ?  setischeckedtwo(element.id): setischeckedtwo('')}></i>
                    {/* <div className='createnew-list' style={{display:  ischecedtwo == item.id? 'block' : 'none'}}>
                    <span className='createnew-list__span'></span>
                      <div className='createnew-list__info' >
                        <div className='createnew-list__check w100'>
                          <div className='df w100 jsbetween'>
                            <div className='df p10'>
                              <input className='createnew-list__imput' type="checkbox" />      
                              <p Checked={true} className='createnew-list__text'onKeyUp={handleKeyPress} >Reading list</p>
                            </div>
                            <i className='bx bxs-lock-alt'></i>    
                          </div>
                          <div>
                            {modalobjtwo.map(item => {
                              return <div className='df jsbetween w100 p10'>
                                  <div className='df'>
                                    <input className='createnew-list__imput' type="checkbox" />    
                                    <p className='createnew-list__text'>{item.category}</p>
                                  </div>
                                  <i className='bx bxs-lock-alt'></i>    

                                </div>
                            })
                            }
                          </div> 
                        </div> 
                      </div> 
                      <p className='createnew-list__add' onClick={createHendlerRecomment}>Create new list</p>
                  </div> */}
                    {/* <BookmarkSave /> */}
                    <i className='bx bx-dots-horizontal-rounded'></i>
                </div>
              </div>
            </div>
            <img className='reacommend__img' src={`https://picsum.photos/id/23/100`} alt="" />
          </div>
        </div>
        })
      }
    </div>
  )
}

export default Recommend

