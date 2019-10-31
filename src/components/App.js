import React from "react"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "/Users/punchcode/Projects/react-validation/src/styles/base.css"
import Form from './Form'
import Submitted from './Submitted'



function App() {

  return (

    <Router>
    <div className="routes">
      <Route exact path="/" component={Form}/>
      <Route path="/Submitted" component={Submitted}/> 
    </div>
    </Router>
    
  )
}

export default App
