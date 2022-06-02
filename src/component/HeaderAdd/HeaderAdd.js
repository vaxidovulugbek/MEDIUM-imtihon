import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Recommend from '../Recommend/Recommend'
import {Object} from '../Object/Object'
import './HeaderAdd.css'
import Menu from '../Menu/Menu'
import Sidebar from '../Sidebar/Sidebar'

function HeaderAdd(props) {

  let categories = ["All", ...new Set(Object.map(item => item.typee))];
  let [datain, setdatain] = useState(Object)
  let [type, settype] = useState(categories)
  let filtered = (type) => {
    if (type === 'All') {
      setdatain(Object)
      return
    }
    let newitemdata = Object.filter(item => {
      return item.typee === type
    })
    setdatain(newitemdata)
  }
  let [statusdisplay, setstatusdisplay] = useState(false)
  let filterbycategory = (e) => {
  //  console.log(88);
 }
  return (
    <div className='Headeradd-con'>
      <Menu/>
       <div className='Headeradd'>
      <div>
        <div className='Headeradd__add'>
          <span className='Headeradd__title'>YOUR TOPICS</span>
          <ul className='Headeradd__list'>
             {type.map((item,i) => {
              return <li className='Headeradd__category' onClick={()=> filtered(item)} key={item}>{item}</li>
            })}
          </ul>
        </div>
        <div className='Headeradd__location'>
          <span className='Headeradd__l'>Following</span>
          <span className='Headeradd__l'>Recommended</span>
        </div>
      </div>
      <Recommend 
      setsavemodal={props.setsavemodal}
       savemodal={props.savemodal}
      setmodalobjtwo={props.setmodalobjtwo}
      modalobjtwo={props.modalobjtwo}
      setmodalobj={props.setmodalobj}
      modalobj={props.modalobj}
      published={props.published}
      type={type}
      filtered={filtered}
      datain={datain}
      setsavetarget={props.setsavetarget}
      savetargetwatch={props.savetargetwatch}
      />
    </div>
      <Sidebar/>
    </div>
  )
}

export default HeaderAdd
