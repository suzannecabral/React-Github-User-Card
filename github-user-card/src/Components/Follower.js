import React from "react";

class Follower extends React.Component {
    render(){

        const { person } = this.props

        return(
            <div className="follower">
                <a href={person.html_url}>
                    <img src={person.avatar_url} className="followerAvatar" alt={person.login}/>
                </a>
                <h4>{person.login}</h4>
            </div>
        );
    }
}

export default Follower;