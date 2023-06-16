import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';


import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import AddFriend from './Components/AddFriend';


function App() {
  return (
   
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link className="link" to="login">Login</Link>
          <Link className="link" to="friends">Friends List</Link>
          <Link className="link" to="friends/add">Add Friend</Link>
          <Link className="link" to="friends">Logout</Link>
        </header>
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
