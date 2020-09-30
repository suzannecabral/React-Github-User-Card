import React from 'react';
import './App.css';
import UserCard from "./Components/UserCard";
import fakeData from "./Components/fakeData.json"

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h1>GitHub User Card</h1>

        <UserCard 
          person={fakeData}
        />

      </div>
    );
  }
}


export default App;
