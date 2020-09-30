import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
    render(){
        return(
            <div className="followerList">
                <h3>Followers:</h3>
                <div className="followerListRow">
                    <Follower />
                    <Follower />
                    <Follower />
                    <Follower />
                    <Follower />
                </div>
            </div>
        );
    }
}

export default FollowerList;