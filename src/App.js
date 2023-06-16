import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Link, Switch} from 'react-router-dom';


import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import AddFriend from './Components/AddFriend';
import Logout from './Components/Logout';

function App() {
  return (
   
      <div className="App">
        
        <Router>
        <header>
          <h2>Friends Database</h2>
          <Link className="link" to="/login">Login</Link>
          <Link className="link" to="/friends">Friends List</Link>
          <Link className="link" to="/friends/add">Add Friend</Link>
          <Link className="link" to="/logout">Logout</Link>
        </header>
          <Switch>
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
          <Route exact path="/logout">
            <Logout />
          </Route>
          </Switch>
        </Router>
      </div>
    
  );
}

export default App;
