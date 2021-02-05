import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost, updateNewPostText} from "./redux/state";
import {addMessage} from "./redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}
                 addMessage={addMessage}
                 updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}