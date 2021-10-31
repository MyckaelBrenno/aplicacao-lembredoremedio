import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Client from './Pages/Client'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Client} />
          <Route path="/promocao" component={Home} />
        </Switch>
      </Router>
    </>
  )
}

export default App
