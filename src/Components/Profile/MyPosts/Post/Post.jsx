import React from "react";
import classes from './Post.module.css';

const Post = (props) => {

    //Отрисовываем аватар, текст, сердце и количество лайков поста

    return <div className={classes.post}>
        <div className={classes.avatar}>
            <img src={props.avatar} alt="post_avatar"/>
        </div>
        <div className={classes.message}>
            {props.message}
        </div>
        <div className={classes.likes}>
            <span className={classes.heart}></span> {props.likesCount}
        </div>
    </div>
}

export default Post