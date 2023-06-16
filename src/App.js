import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';


import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import AddFriend from './Components/AddFriend';


function App() {
  return (
   
      <div className="App">
        <Router>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/friends">
            <FriendsList />
          </Route>
          <Route exact path="/friends/add">
            <AddFriend />
          </Route>
        </Router>
      </div>
    
  );
}

export default App;
