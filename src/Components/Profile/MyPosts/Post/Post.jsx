import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return <div className={classes.post}>
        <div className={classes.avatar}>
            <img src={props.avatar}/>
        </div>
        <div className={classes.message}>
            {props.message}
        </div>
        <div className={classes.likes}>
            <span>Лайки</span> {props.likesCount}
        </div>
    </div>
}

export default Post