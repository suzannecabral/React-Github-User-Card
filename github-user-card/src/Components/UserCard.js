import React from "react";
import FollowerList from "./FollowerList";
import ImageFrame from "./ImageFrame";

class UserCard extends React.Component {
    render() {
        return(
            <div className="userCard">
                <h2>User Card</h2>

                <ImageFrame />

                <FollowerList />

            </div>
        );
    }
}

export default UserCard;