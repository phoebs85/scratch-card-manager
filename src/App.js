import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import './App.css'
// Pages
import MainPage from './pages/main-page'
import AdminPage from './pages/admin-page'

const App = () => (
  <Router>
    <Route exact path="/" component={MainPage}/>
    <Route exact path="/admin" component={AdminPage}/>
  </Router>
)

export default App
