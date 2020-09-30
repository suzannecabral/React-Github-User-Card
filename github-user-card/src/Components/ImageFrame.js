import React from "react";

class UserImage extends React.Component{
    render(){

        const { person } = this.props

        return(
            <div className="userImage">
                <div className="fakeImage">
                    <a href={person.html_url}>
                        <img src={person.avatar_url} alt={person.login}/>
                    </a>
                </div>
            </div>
        );
    }
}

export default UserImage;