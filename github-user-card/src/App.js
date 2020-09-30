import React from 'react';
import './App.css';
import UserCard from "./Components/UserCard";

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h1>Hello</h1>
        <p>this is the app</p>

        <UserCard />

      </div>
    );
  }
}


export default App;
