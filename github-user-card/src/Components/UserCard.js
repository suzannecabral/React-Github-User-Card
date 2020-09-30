import React from "react";
import FollowerList from "./FollowerList";
import UserImage from "./ImageFrame";

class UserCard extends React.Component {
    render() {
        const { person } = this.props;
        return(
            <div className="userCard">
                <div className="userCardRow">
                    <div className="userCardText">
                        <h2>{person.name}</h2>
                        <a className="userLogin" href={person.html_url}>
                            <p className="userLogin">{person.login}</p>
                        </a>

                        <div className="detailsText">
                            <p><span class="bold">Location:</span> {person.location}</p>
                            <p><span class="bold">Company:</span> {person.company}</p>
                            
                            <p><span class="bold">Bio:</span> {person.bio}</p>
                        </div>
                        <div className="workLinks">
                            <a href={person.organizations_url}>
                                <p>My Orgs</p>
                            </a>
                            <a href={person.repos_url}>
                                <p>My Repos ({person.public_repos})</p>
                            </a>
                        </div>
                    </div>
                    <UserImage 
                        person={person}
                    />
                </div>

            </div>
        );
    }
}

export default UserCard;