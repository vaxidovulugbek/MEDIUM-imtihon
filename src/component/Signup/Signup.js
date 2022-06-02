import React, { useState } from 'react'
import './Signup.css'
import signup from '../../assets/img/signup.png'
import { Link } from 'react-router-dom'
function Signup({setinputgmail,setnamehendler,namehendlering}) {

  let [validation, setvalidation] = useState(1)
  let [validation1, setvalidation1] = useState(1)
  let [validation2, setvalidation2] = useState(1)
  let [validation3, setvalidation3] = useState(1)
  let nameHendler = (e) => {

    if (e.target.value.length < 5) {
      setvalidation(false)
    }
    else {
      setvalidation(true)
    }
    namehendlering(e.target.value)
  }
  let nameHendlervalue = () => {

  }
  let emailHendler = (e) => {
    setinputgmail(e.target.value)
    if (e.target.value.length < 5) {
      setvalidation1(false)
    }
    else {
      setvalidation1(true)
    }
  }

  let validationnumber = (e) => {
    if (e.target.value.length < 5) {
      setvalidation2(false)
    }
    else {
      setvalidation2(true)
    }
  }
  let validationpassword = (e) => {
    if (e.target.value.length < 8) {
      setvalidation3(false)
      setsignupp(true)
    }
    else {
      setvalidation3(true)
      setsignupp(false)
    }
  }
  let [signupp, setsignupp] = useState(true)
  return (
     <div className='signup'>
      <div className='signup__img-content'>
        <img className='signup__img' src={signup} alt="signup-img" />
      </div>
      <div className='signup__info'>
        <p className='signup__text'>Sign up</p>
        <form className='signup__form'>
          <input className='signup__input' type="text" placeholder='name' style={{border: validation ? '1px solid black' : '1px solid red'}} onChange={nameHendler} required />
          <span className='input-validation' style={{color: validation ? "black" : "red"}}>more 5 symbol</span>
          <input className='signup__input' type="number" placeholder='Phone' style={{border: validation2 ? '1px solid black' : '1px solid red'}} required onChange={validationnumber}/>
          <span className='input-validation'  style={{color: validation2 ? "black" : "red"}}>more 5 symbol</span>
          <input className='signup__input' type="email" placeholder='Email' style={{border: validation1 ? '1px solid black' : '1px solid red'}} onChange={emailHendler} required />
          <span className='input-validation' style={{color: validation1 ? "black" : "red"}}>more 5 symbol</span>
          <input className='signup__input' type="password" placeholder='Password' style={{border: validation3 ? '1px solid black' : '1px solid red'}} required onChange={validationpassword}/>
          <span className='input-validation' style={{color: validation3 ? "black" : "red"}}>more 8 symbol</span>
          <button onClick={nameHendlervalue} style={{display: signupp ? "none" : "block"}} className='signup__btn'><Link className='signup__btnlink' to={"/home"}>Next step</Link></button>
          <button style={{display: signupp ? "block" : "none"}} className='signup__btn'><button className='signup__btnlink' to={"/home"}>Next step</button></button>
        </form>
      </div>
    </div>
  )
}
export default Signup

