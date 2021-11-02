import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'
import logo from '../images/logo.png'
import simbolo from '../images/simbolo.png'

function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{ color: 'fff' }}>
        <div className="navbar-fixed">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div>
            <img className="logo" src={logo} />
          </div>
          <div>
            <h1 className="h1-navbar">Lembretes restantes: </h1>
          </div>
          <div>
            <button className="button-navbar">
              <Link className="link-navbar" to="/compras">
                <b>37149 </b>
              </Link>
            </button>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
              <div>
                <img className="simbolo" src={simbolo} />
              </div>
            </li>
            {SidebarData.map((item, index) => {
              //O index funciona praticamente como um contador, logo a arrow function faz a referencia para todas nav-text
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
