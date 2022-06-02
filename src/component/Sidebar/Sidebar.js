import React from 'react'
import './Sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
      <button className='sidebar__getbtn'>Get unlimited accsess</button>
      <div className='df sidebar__searchgroup'>
          <i className='bx bx-search'></i>
          <input className='sidebar__input' type="search" placeholder='Search'/>
      </div>
      <div className='df ai sidebar__w'>
        <span className='sidebar__dot'></span>
        <p className='sidebar__whattext'>What We're Reading Today</p>
      </div>
      <div className='df ai '>
        <img className='sidebar__icon' src="https://www.avantage-travel.com.ua/image/catalog/%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D1%8B/%D0%9A%D0%B0%D1%82%D0%B0%D1%80/%D0%9A%D0%B0%D1%82%D0%B0%D1%80.jpg" alt="" />
        <h3 className='sidebar__titlee'>Savala Nolan</h3>
      </div>
      <p className='sidebar__on'>On Slowness</p>
      <div className='df'>
        <img className='sidebar__icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Clive_Thompson_at_Games_for_Change_conference.jpg/1200px-Clive_Thompson_at_Games_for_Change_conference.jpg" alt="" />
        <h3 className='sidebar__titlee'>Clive Thompson</h3>
      </div>
      <p className='sidebar__subtexts'>Programming Isn’t Hard — But It’s Frustrating</p>
      <p className='sidebar__subtexts'>When Was the Last Time You Looked at Your Phone Contacts?</p>
      <span className='sidebar__see-span'>See the full list</span>
      <div>
        <p className='sidebar__recomment'>Recommended topics</p>
        <div className='sidebar__btn-group'>
          <button className='sidebar__btn'>Technology</button>
          <button className='sidebar__btn'>Money</button>
          <button className='sidebar__btn'>Productive</button>
          <button className='sidebar__btn'>Business</button>
          <button className='sidebar__btn'>Psyhology</button>
          <button className='sidebar__btn'>Mindfullnes</button>
          <button className='sidebar__btn'>Art</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar