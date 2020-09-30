import React from "react";

class Follower extends React.Component {
    render(){

        const { person } = this.props

        return(
            <a href={person.html_url}>
                <div className="follower">
                        <img src={person.avatar_url} className="followerAvatar" alt={person.login}/>
                    <h4>{person.login}</h4>
                </div>
            </a>
        );
    }
}

export default Follower;