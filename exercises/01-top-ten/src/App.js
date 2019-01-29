import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'

import './App.css';
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/restaurant/:id' component={Restaurant}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
