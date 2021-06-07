import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Datas from './components/Datas';
import Navbar from './components/Navbar'
import './App.css'

function App() {
  
  return (
    <Router>
      <div className="Appcomponent">
        <Navbar/>
        <Switch>
          <Route path="/" component={Datas} />
        </Switch>
      
      </div>
    </Router>
    
  )
}

export default App
