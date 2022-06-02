import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'
import Sidebar from '../Sidebar/Sidebar'
import './Save.css'
import SaveModal from './SaveModal/SaveModal'

function Savee(props) {
  let savemodal = () => {
    props.setsavemodal(false)
  }
  return (
    <div className='Save-con'>
      <Menu/>
      <div className='Save'>
        <div className='Save__your'>
          <p className='Save__yourtext'>Your lists</p>
          <button className='Save__yourbtn' onClick={savemodal}>New List</button>
        </div>
        <div className='Save__saved'>
          <p className='Save__saved-text'>Saved</p>
          <p className='Save__savedsubtext'>Highlights</p>
        </div>
        <div className='save-card'>
            <div className='save-card__img'>
              <svg width="283" height="174" viewBox="0 0 283 174" fill="none"><circle opacity="0.15" cx="141.5" cy="87.5" r="141.5" fill="#E8F3E8"></circle><circle cx="141.5" cy="87.5" r="29.5" fill="#fff"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M148.71 74.32a.66.66 0 0 1 1.31.07v3.28h3.28a.66.66 0 1 1 0 1.3h-3.28v3.29a.66.66 0 1 1-1.3 0v-3.28h-3.29a.66.66 0 0 1 0-1.31h3.28v-3.28-.07zm-13.77 4c-.72 0-1.3.59-1.3 1.31v17.68l7.46-5.74a.66.66 0 0 1 .8 0l7.47 5.74V87.5a.66.66 0 1 1 1.3 0v11.14a.66.66 0 0 1-1.05.52l-8.12-6.24-8.12 6.24a.65.65 0 0 1-1.06-.52v-19a2.62 2.62 0 0 1 2.62-2.63h5.25a.66.66 0 0 1 0 1.31h-5.25z"  fill="#0F730C"></path></svg>
            </div>
            <h3 className='save-card__text'>Create a list to easily organize and share stories</h3>
            <button className='new-list__btn add-save-btn bg-dark mt-3'>Start a list</button>
          <button className='close__btn'>X</button>
       </div>
      <Link to={"/saveall"}>
      <div className='save-create-el'>
              <div className='save-infos'>
                <p className='save-modal-text'>Reading list</p>
                <button className='save-btn-viev'>Viev list</button>
              </div>
               <div className='save__box-right'>
                  <div className='save__box-one save__box-all'>
                    <div className='save__box-grey'></div>
                  </div>
                  <div className='save__box-two save__box-all'>
                    <div className='save__box-grey'></div>
                  </div>
                  <div className='save__box-three save__box-all'>
                    <div className='save__box-grey'></div>
                  </div>
                </div>
          </div>
      </Link>
             { props.modalobjtwo.map(item => {
              return <Link to={`/savetargetinfo/${item.id}`}>
                    <div className='save-create-el'>
                      <div className='save-infos'>
                        <p className='save-modal-text'>{item.category}</p>
                        <button className='save-btn-viev'>Viev list</button>
                      </div>
                      <div className='save__box-right'>
                          <div className='save__box-one save__box-all'>
                            <div className='save__box-grey'></div>
                          </div>
                          <div className='save__box-two save__box-all'>
                            <div className='save__box-grey'></div>
                          </div>
                          <div className='save__box-three save__box-all'>
                            <div className='save__box-grey'></div>
                          </div>
                        </div>
                  </div>
              </Link>
            })}
      
        <SaveModal savemodal={props.savemodal} setsavemodal={props.setsavemodal} setmodalobj={props.setmodalobj} modalobj={props.modalobj} 
        modalobjtwo={props.modalobjtwo}
        setmodalobjtwo={props.setmodalobjtwo}
        />
      </div>
      <Sidebar/>
    </div>
  )
}

export default Savee
