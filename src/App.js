import React from 'react';
import './App.css';
import TinderCards from './TinderCards'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

      {/* HEADER */}
      <Header/>
      <Switch>
        <Route path="/chat">
          <h1>I am on chat page</h1>

        </Route>
        <Route path="/">
          <TinderCards />
        </Route>
      </Switch>
      {/* Tinder cards */}
        

      </Router>

      {/* Buttons below cards*/}
      {/* Chats screen */}    
      {/* Individual Chats screen */}



    </div>
  );
}

export default App;
