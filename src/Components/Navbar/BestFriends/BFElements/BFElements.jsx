import React from "react";
import classes from "./../BestFriends.module.css"

const bestFriendElements = (props) => {
    return (
        <div>
            <div className={classes.bfavatar}>
                <img src={props.bfpicture}/>
            </div>
            <div className={classes.bfname}>
                    {props.bfname}
            </div>
        </div>
    )
}
export default bestFriendElements