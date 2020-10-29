import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return <div className={classes.post}>
        <div>
            <img src={props.avatar}/>
        </div>
        <div>
            {props.message}
        </div>
        <div>
            <span>Like</span> {props.likesCount}
        </div>
    </div>
}

export default Post