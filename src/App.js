import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'

import "./Styles/App.scss"
import "./Styles/Header.scss"
import "./Styles/Home.scss"


function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
   </Router>
  )
}

export default App