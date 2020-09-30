import React from 'react';
import './App.css';
import UserCard from "./Components/UserCard";
import FollowerList from "./Components/FollowerList"
// import fakeData from "./Components/fakeData.json"

class App extends React.Component{

  state = {
    username:"suzannecabral",
    userPerson:{},
    followers:[]
  }

  componentDidMount() {
    this.fetchUser(this.state.username);
    this.fetchFollowers(this.state.username);
  }

  fetchUser = (username) => {
    // console.log("App mounted");

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        this.setState({
          userPerson:data
        });

      })
      .catch((err) => console.log("fetch error: ", err));
      
  };

  fetchFollowers = (username) => {
    
    fetch(`https://api.github.com/users/${username}/followers`)
      .then((res) => res.json())
      .then((data) => {

        this.setState({
          followers:data
        });

      })
      .catch();

  };


  render(){
    return(
      <div className="App">
        <h1>GitHub User Card</h1>

        <UserCard 
          person={this.state.userPerson}
          followers={this.state.followers}
        />
        <FollowerList 
    followers={this.state.followers}
        />

      </div>
    );
  }
}


export default App;
