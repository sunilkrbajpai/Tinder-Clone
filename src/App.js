import React from 'react';
import './App.css';
import TinderCards from './TinderCards'
import Header from './Header';
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";


function App() {
  return (
    <div className="App">
      <Router>

      {/* HEADER */}
      
      <Switch>
        <Route path="/chats/:person">
          <Header backButton="/chats"/>
          <ChatScreen/>
        </Route>
        <Route path="/chats">
          <Header backButton="/"/>
          <Chats/>
        </Route>
        <Route path="/">
          <Header/>
          <TinderCards />
          <SwipeButtons />
        </Route>
      </Switch>
        

      </Router>
      {/* Tinder cards */}
      {/* Buttons below cards*/}
      {/* Chats screen */}    
      {/* Individual Chats screen */}



    </div>
  );
}

export default App;
