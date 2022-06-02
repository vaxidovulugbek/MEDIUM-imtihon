import React, { useState } from 'react'
import menudot from '../../assets/img/menudot.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse,faBell,faBookmark,faSdCard,faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import './Menu.css'
import { BrowserRouter, Link, NavLink } from 'react-router-dom'

function Menu({comments,namehendler}) {
 
  let [colorone, setcolorone] = useState(true)
  let [colortwo, setcolortwo] = useState(false)
  let [colorthree, setcolorthree] = useState(false)
  let [colorfour, setcolorfour] = useState(false)
  let [colorfive, setcolorfive] = useState(false)

  let [menuColor, setMenuColor] = useState(true)
  let [menuModal, setmenuModal] = useState(true)
  let menumodalHendler = () => {
    setmenuModal(!menuModal)
    setcolorone(true)
    setcolortwo(false)
    setcolorthree(false)
    setcolorfour(false)
    setcolorfive(false)
  }
  let menu = () => {
    setMenuColor(!menuColor)
  }

  return (
    <div className='menu-content'>
      <div className='menu'>
        <Link to={"/home"}><img className='menu-img' src={menudot} alt="menudots" /></Link>
       <div className='menu-between'>
       <div className='menu-nav'>
            <NavLink to={"/home"}><svg className='menu-icon'  onClick={menu} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Home"><path d="M4.5 10.75v10.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-5.5c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v5.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-10.5M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></NavLink>
            <NavLink to={"/bell"}><svg className='menu-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Notifications"><path d="M15 18.5a3 3 0 1 1-6 0" stroke="currentColor" stroke-linecap="round"></path><path d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z" stroke="currentColor" stroke-linejoin="round"></path></svg></NavLink>
            <NavLink to={"/save"}><svg className='menu-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Lists"><path d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z" stroke="currentColor" stroke-linecap="round"></path><path d="M8 6V3.25c0-.14.11-.25.25-.25h11.5c.14 0 .25.11.25.25V16.5" stroke="currentColor" stroke-linecap="round"></path></svg></NavLink>
            <NavLink to={"/stories"}><svg className='menu-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Stories"><path d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z" stroke="currentColor"></path><path d="M8 8.5h8M8 15.5h5M8 12h8" stroke="currentColor" stroke-linecap="round"></path></svg></NavLink>
            <span className='menu-hr'></span>
            <NavLink to={"/Input"}><svg className='menu-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write"><path d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor"></path><path d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2" stroke="currentColor"></path></svg></NavLink> 
        </div>
        {/* <div className='menu-nav'>
            <Link to={"/home"}><FontAwesomeIcon className='menu-icon' icon={faHouse} onClick={menu} style={{color: colorone ? "#000" : "#757575"}}/></Link>
            <Link to={"/bell"}><FontAwesomeIcon className='menu-icon' icon={faBell} onClick={colortwoo}  style={{color: colortwo ? "#000" : "#757575"}} /></Link>
            <Link to={"/save"}><FontAwesomeIcon className='menu-icon' onClick={colorthrere} icon={faBookmark} style={{color: colorthree ? "#000" : "#757575"}} /></Link>
            <Link to={"/stories"}><FontAwesomeIcon className='menu-icon' onClick={colorfore} icon={faSdCard} style={{color: colorfour ? "#000" : "#757575"}} /></Link>
            <span className='menu-hr'></span>
            <Link to={"/Input"}><FontAwesomeIcon className='menu-icon' onClick={colorfiv} icon={faPenToSquare} style={{color: colorfive ? "#000" : "#757575"}} /></Link> 
        </div> */}
        <button className='menu-btn' onClick={menumodalHendler}>U</button>
       </div>
        <div className='menu-modal' style={{display: menuModal ? 'none' : 'block'}}>
          <div className='menu-modal__first'>
            <p className='menu-modal__text'>Medium Partner Programm</p>
            <p className='menu-modal__text'>Gift a membership</p>
            <p className='menu-modal__text'>Become a member</p>
          </div>
          <div className='menu-modal__second'>
            <p className='menu-modal__text'>Sign out</p>
            <p className='menu-modal__text'>Refine recomendation</p>
            <p className='menu-modal__text'>Manage publications</p>
            <p className='menu-modal__text'>Stats</p>
            <p className='menu-modal__text'>Settings</p>
          </div>
          <div className='menu-modal__third'>
              <button className='menu-button'>U</button>
              <div className='menu-modal__inputs-info'>
                <p className='menu-modal-texts'>{namehendler}</p>
                <p className='menu-modal-texts'>@vulubek</p>
              </div>
          </div>
        </div>
    </div>

    </div>
  )
}

export default Menu



