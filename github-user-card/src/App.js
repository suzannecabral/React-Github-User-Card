import React from 'react';
import './App.css';
import UserCard from "./Components/UserCard";

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h1>App</h1>

        <UserCard />

      </div>
    );
  }
}


export default App;
