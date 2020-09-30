import React from "react";
import FollowerList from "./FollowerList";
import UserImage from "./ImageFrame";

class UserCard extends React.Component {
    render() {
        return(
            <div className="userCard">
                <h2>User Card</h2>

                <UserImage />

                <FollowerList />

            </div>
        );
    }
}

export default UserCard;