import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';


const FriendsList = () => {
  return (<h2>FriendList</h2>)
}

const AddFriend = () => {
  return (<h2>AddFriend</h2>)
}

const Login = () => {
  return (<h2>Login</h2>)
}

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
