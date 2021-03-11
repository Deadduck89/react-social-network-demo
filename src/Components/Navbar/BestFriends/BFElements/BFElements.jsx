import React from "react";
import classes from "./../BestFriends.module.css"

const BestFriendElements = (props) => {
    return (
        <div className={classes.bfelement}>
            <div className={classes.bfavatar}>
                <img src={props.bfpicture}/>
            </div>
            <div className={classes.bfname}>
                    {props.bfname}
            </div>
        </div>
    )
}
export default BestFriendElements