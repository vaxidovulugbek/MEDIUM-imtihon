import React, { useRef } from 'react'
import './SaveModal.css'
let count = 1
function SaveModal({savemodal,setsavemodal,modalobj,setmodalobj,setmodalobjtwo,modalobjtwo}) {
  const refinput = useRef(null)
  let savemodalclose = () => {
    setsavemodal(true)
  }

  let saveinputHendler = (e) => {
    setmodalobj({
      category:e.target.value,
      id:count,
    })
    count++
  }
  let savecreate = (e) => {
    let saveinput = document.querySelector("#saveinput")
    saveinput.value = " "
    setmodalobjtwo([...modalobjtwo, modalobj])
    setsavemodal(true)
    refinput.current.value = "" 
  }

  return (
   <div style={{display: savemodal ? 'none' : 'block'}}>
      <div className='SaveModalbg'></div>
      <div className='SaveModal' >
     <div className='SaveModal__contaner'>
      <p className='SaveModal__title'>Create new list</p>
        <input ref={refinput} id='saveinput' className='SaveModal__input' type="text" min={0} max={60} placeholder='Give it a name' onChange={saveinputHendler}/>
        <p className='SaveModal__text'>Add a description</p>
        <div className='SaveModal__check'>
          <input className='SaveModal__check-input' type="checkbox" />
          <p className='SaveModal__make'>Make it private</p>
        </div>
        <div className='SaveModal__btn-group'>
          <button className='SaveModal__cancelbtn' onClick={savemodalclose}>Cancel</button>
          <button className='SaveModal__create-btn'  onClick={savecreate}>Create</button>
        </div>
        <button className='SaveModal__close' onClick={savemodalclose}>x</button>
      </div>
    </div>
   </div>
  )
}

export default SaveModal