import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";


let state = {
    posts: [
        {id: 1, post: 'Hi, how are you?', likesCount: 15,avatar: 'https://clck.ru/RaH6Z'},
        {id: 2, post: "It's my first post", likesCount: 20,avatar: 'https://clck.ru/RaH7G'},
    ],
}

test('length of posts should be incremented', () => {
    //Test data
    let action = addPostActionCreator("ITKamasutra")
    //Action
    let newState = profileReducer( state, action );

    //Expectation
    expect(newState.posts.length).toBe(3);
})

test('new post message should be correct', () => {
    //Test data
    let action = addPostActionCreator("ITKamasutra")
    //Action
    let newState = profileReducer( state, action );

    //Expectation
    expect(newState.posts[2].post).toBe("ITKamasutra")
})

test('after delete length of post should be decremented', () => {
    //Test data
    let action = deletePost(1)
    //Action
    let newState = profileReducer( state, action );

    //Expectation
    expect(newState.posts.length).toBe(1);
})
test('after delete length of post shouldnt be decremented if id is wrong', () => {
    //Test data
    let action = deletePost(1000)
    //Action
    let newState = profileReducer( state, action );

    //Expectation
    expect(newState.posts.length).toBe(2);
})
