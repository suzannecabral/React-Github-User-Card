import React from "react";
import Follower from "./Follower";
// import fakeFollowers from "./fakeFollowers.json";
import shortid from "shortid";

class FollowerList extends React.Component {
    render(){
        const { followers } = this.props
        return(
            <div className="followerList">
                <h3>Followers:</h3>
                <div className="followerListRow">
                    {
                        followers.map((person)=>{
                            return(
                                <Follower key={shortid.generate()}
                                    person={person}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default FollowerList;