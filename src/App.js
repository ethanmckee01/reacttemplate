import React from 'react';
import {Route, HashRouter} from 'react-router-dom'

import './App.css';

import Home from './home'
import Away from './Away'
import Nav from './Nav'

function App() {
  return (
    <HashRouter>
      <div>
        <Nav />
        <Route exact path="/" component={Home}/>
        <Route path="/away" component={Away}/>
      </div>
    </HashRouter>
  );
}

export default App;
