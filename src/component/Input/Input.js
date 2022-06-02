import React, { useRef, useState } from 'react'
import inputicon from '../../assets/img/menudot.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import './Input.css'

import { Link } from 'react-router-dom'

let ddd = ""
let country = 500
let count = 1
function Input({setinputwatch,inputwatch,setwatch,savetargetwatch,comments,storyText, setStoryText, emptyStory, setEmptyStory,setpublished,published,setnewtextcontent,newtextcontent,newinput,setnewinput,setnewTitleinput,newTitleinput,setTitleinput,Titleinput}) {

  let test = {
    id:country,
    title:ddd ,
    name:"",
    type:"Front End",
  }

  const inputref = useRef(null)
  const textAreaHandle = (e) =>{
    setEmptyStory(e.target.value)
    test.name = e.target.value
    setinputwatch({
      title:ddd,
      name:e.target.value,
      id:country,
    })
  }

  const publishHandler = () =>{
    setStoryText([
      ...storyText, {
        text: emptyStory,
        id: count
      }
    ])

    setwatch([
      ...savetargetwatch,inputwatch
    ])
    country++
  }
  let addTitleHendler = (e) => {
    ddd = e.target.value
  }
  let addetHendler = (e) => {
    if (e.keyCode == 13) {
      test.name = e.target.value
      if (test.title !== "") {
        setnewtextcontent([...newtextcontent, test])
        country++
      }
      setnewinput([...newinput,"o"])
      inputref.current.focus()     
    }
  }
  let publishhendler = (e) => {
    setpublished([...newtextcontent])
  }
  return (
    <div className='container'>
        <div className='inputHeader'>
            <div className='inputHeader__menu'>
              <Link to={"/home"}><img className='inputHeader__icon' src={inputicon} alt="" /></Link>
              <p className='inputHeader__text'>Draft in name</p>
            </div>
            <div className='inputHeader__content'>
              <button className='input-publishbtn' onClick={publishHandler}>Publish</button>
              <i className='bx bx-dots-horizontal-rounded'></i>
              <FontAwesomeIcon className='input-fabelll' icon={faBell} />
              <button className='input-btn'>U</button>
            </div>
        </div>
        <div className='inputmain'>
            <input onChange={addTitleHendler} className='inputmain__title' type="text" placeholder='Title' x/>
              <div className='dff'>
              <button className='encrement-btn'>+</button>
              <textarea className='textareaaa' onChange={textAreaHandle} cols="30" rows="10"></textarea>
              </div>

        </div>
        <p className='input-text'>Select text to change formatting, add headers, or create links.</p>
    </div>
  )
}

export default Input
