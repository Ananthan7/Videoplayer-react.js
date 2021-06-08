import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Datas from './components/Datas';
import Navbar from './components/Navbar'
import './App.css'
import Items from './components/Items';

function App() {
  
  return (
    <Router>
      <div className="Appcomponent">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Datas} />
          <Route path="/items/:url" component={Items} />
        </Switch>
      
      </div>
    </Router>
    
  )
}

export default App
