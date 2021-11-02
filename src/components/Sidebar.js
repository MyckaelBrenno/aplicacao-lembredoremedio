import React from 'react'
import logo from '../images/logo.png'
import './Navbar.css'
import Login from '../Pages/Login'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="navbar">
      <div>
        <img className="logo" src={logo} />
      </div>
      <nav className="nav-sidebar">
        <ul className="nav-ul">
          <li className="nav-li">
            <Link className="link-sidebar" to="/">
              <b> Principal </b>
            </Link>
          </li>
          <li className="nav-li">
            <Link className="link-sidebar" to="#">
              <b> Veja como funciona </b>
            </Link>
          </li>
          <li className="nav-li">
            <Link className="link-sidebar" to="#">
              <b> Sou uma farmácia </b>
            </Link>
          </li>
          <li className="nav-li">
            <Link className="link-sidebar" to="#">
              <b>Faça seu cadastro</b>
            </Link>
          </li>
          <li className="nav-li">
            <Link className="link-sidebar" to="#">
              <b>Nossos planos </b>
            </Link>
          </li>
          <li className="nav-li">
            <Link className="link-sidebar" to="#">
              <b>Contato</b>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="login">
        <Login />
      </div>
    </div>
  )
}

export default Sidebar
