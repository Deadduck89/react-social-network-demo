import React from "react";
import classes from "./BestFriends.module.css";
import bestFriendElements from "./BFElements/BFElements";

const BestFriends = (props) => {
    let bestFriendElements = props.friends.map(
        bfriendselm => <bestFriendElements
            bfpicture={bfriendselm.bfavatar}
            bfname={bfriendselm.bfriend}/>
    );


    return (
        <div className={classes.bestfriends}>
            <div className={classes.bfavatar}>
                { bestFriendElements }
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