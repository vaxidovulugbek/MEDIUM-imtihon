import React from 'react'
import {Object} from '../../Object/Object'
function BookmarkSave({ischecedtwo,item,modalobjtwo,setsavemodal,setsavetarget}) {
  let createHendlerRecomment = (e) => {
    setsavemodal(false)
  }   
  let saveelementcheck = (e) => {
      modalobjtwo.map(item => {
        if (e.target.textContent === item.category) {
          Object.map(el => {
              if (el.id == e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.id) {
                setsavetarget({
                  name:el.name,
                  title:el.title,
                  desc:el.desc,
                  icon:el.icon,
                  img:el.img,
                  
                })
              }
          })
          console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild); 
      }
      })
  }
  return (
    <div> 
      <div className='createnew-list' style={{display:  ischecedtwo == item.id? 'block' : 'none'}}>
        <span className='createnew-list__span'></span>
          <div className='createnew-list__info' >
            <div className='createnew-list__check w100'>
              <div className='df w100 jsbetween'>
                <div className='df p10'>
                  <p  className='createnew-list__text' onClick={saveelementcheck}>Reading list</p>
                </div>
                <i className='bx bxs-lock-alt'></i>    
              </div>
              <div>
                {modalobjtwo.map(item => {
                  return <div className='df jsbetween w100 p10'>
                      <div className='df'>
                        {/* <input className='createnew-list__imput' type="checkbox"/>     */}
                        <p className='createnew-list__text' onClick={saveelementcheck}>{item.category}</p>
                      </div>
                      <i className='bx bxs-lock-alt'></i>    
                  </div>
                })
                }
              </div> 
            </div> 
          </div> 
          <p className='createnew-list__add' onClick={createHendlerRecomment}>Create new list</p>
      </div>
    </div>
  )
}

export default BookmarkSave