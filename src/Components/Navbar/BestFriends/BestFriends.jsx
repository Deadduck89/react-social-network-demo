import React from "react";
import classes from "./BestFriends.module.css";
import BestFriendElements from "./BFElements/BFElements.jsx";
import {NavLink} from "react-router-dom";

const BestFriends = (props) => {

    let bfElement = props.bfriends.map(
        bfriends => <BestFriendElements bfpicture={bfriends.bfavatar}
                                        bfname={bfriends.bfriend}/>
                                        )
    return (
        <div>
            <div className={classes.friends}>
                <NavLink to='/friends' activeClassName={classes.active}>Friends</NavLink>
            </div>
            <div className={classes.bestfriends}>
                <div>
                    {bfElement}
                </div>
            </div>
        </div>

    )
}

export default BestFriends