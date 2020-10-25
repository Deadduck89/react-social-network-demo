import React from "react";
import classes from "./BestFriends.module.css";
import bestFriendAvatar from "./BFAvatar/BFAvatar";
import bestFriendName from "./BFName/BFName";

const BestFriends = (props) => {
    let bestFriendAvatarElements = props.state.friends.map(
        avatar => <bestFriendAvatar avatar={avatar.avatar}/>
    );
    let bestFriendNameElements = props.state.friends.map(
        bfriend => <bestFriendName bfriend={bfriend.bfriend}/>
    );


    return (
        <div className={classes.bestfriends}>
            <div className={classes.bfavatar}>
                { bestFriendAvatarElements }
            </div>
            <div className={classes.bfname}>
                { bestFriendNameElements }
            </div>
        </div>
    )
}
    /*return (
        <div className={classes.bestfriends}>
        <div className={classes.friendavatar}>

            <img src='https://clck.ru/RaH87' />
        </div>
        <div className={classes.friendname}>

            <h4>Zhop</h4>
        </div>
        </div>
    )*/


export default BestFriends