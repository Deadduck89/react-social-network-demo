import React from "react";
import Post from "./Post/Post.jsx";
import classes from './MyPosts.module.css';



const MyPosts = (props) => {
    let postElements = props.posts.map(
        post => <Post message={post.post}
                      likesCount={post.likesCount}
                      avatar={post.avatar}/>
    )
    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.onAddPost();
    };

    let onPostChange = () => {
        let postText = newPostElement.current.value;
        props.updateNewPostText(postText)
    }

    return <div className={classes.content}>
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    </div>
}

export default MyPosts