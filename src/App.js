import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Client from './Pages/Client'
import Login from './Pages/Login'
import ImageSlider from './components/Carousel/ImageSlider'
import RoutesPrivate from './components/Routes/Private/Private'
import { SliderData } from './components/Carousel/SliderData'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Sidebar />
            <ImageSlider slides={SliderData} />
          </Route>
          <Route exact path="/promocao">
            <Navbar />
            <Client />
          </Route>
          <Route exact path="/atendente">
            <Navbar />
          </Route>
          <Route exact path="/relatorios">
            <Navbar />
          </Route>
          <Route exact path="/compras">
            <Navbar />
          </Route>
          <Route exact path="/meusdados">
            <Navbar />
          </Route>
          <RoutesPrivate exact path="/">
            <Navbar />
          </RoutesPrivate>
        </Switch>
      </Router>
    </>
  )
}

export default App
