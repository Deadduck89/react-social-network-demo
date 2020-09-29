import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return  <div className={classes.post}>
                <div>
                    <img src='https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&rect=37%2C29%2C4955%2C3293&q=45&auto=format&w=926&fit=clip'/>
                </div>
                <div>
                    {props.message}
                </div>
                <div>
                    <span>Like</span>  {props.likescount}
                </div>
            </div>
}

export default Post