import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line,RiCloseLine } from 'react-icons/ri'
import svgLogo from '../../assets/logo.svg'
import  {NavbarLinks, NavbarButtons } from './navbarFn'



const Navbar = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(true)
  return (
    <div className='gpt3__navbar'>

        <div className="gpt3__navbar-logo">
          <img src={svgLogo} alt="svg logo"/>
        </div>

      <div className="gpt3__navbar-links_container">

        <div className="gpt3__navbar-links">
          <NavbarLinks/>          
        </div>

        <div className="gpt3__navbar-links_button">
            <NavbarButtons/>
        </div>

      </div>

      <div className="gpt3__navbar-mobile_menu">
      {toggleMobileMenu
          ? <RiMenu3Line color="#fff" size={30} onClick={() => setToggleMobileMenu(false)} />
          : <RiCloseLine color="#fff" size={30} onClick={() => setToggleMobileMenu(true)} />}

      {!toggleMobileMenu && (
        <div className="gpt3__navbar-mobile_container scale-up-center">
          <div className="gpt3__navbar-mobile_links">
              <NavbarLinks/>
          </div>
          <div className="gpt3__navbar-mobile_buttons">
              <NavbarButtons/>
          </div>
        </div>
      )

      }
      </div>
    </div>
  )
}

export default Navbar