import React from "react";
import FollowerList from "./FollowerList";
import UserImage from "./ImageFrame";

class UserCard extends React.Component {
    render() {
        const { person } = this.props;
        return(
            <div className="userCard">
                <div className="userCardRow">
                    <div>
                        <h2>{person.name}</h2>
                        <a href={person.html_url}>
                            <p className="loginName">{person.login}</p>
                        </a>

                        <p>Location: {person.location}</p>
                    </div>
                    <UserImage 
                        person={person}
                    />
                </div>
                <FollowerList />
            </div>
        );
    }
}

export default UserCard;