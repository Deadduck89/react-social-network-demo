import React from "react";
import classes from "./../BestFriends.module.css"

const bestFriendAvatar = (props) => {
    return (
        <div>
        <img src={props.avatar}/>
        </div>
    )
}

export default bestFriendAvatar