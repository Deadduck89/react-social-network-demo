import React from "react";
import {connect} from "react-redux";
import BestFriends from "./BestFriends";

//Компонент заморожен

let mapStateToProps = (state) => {

    return {
        friends: state.sidebar.friends

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
    }

}
const BestFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(BestFriends)

export default BestFriendsContainer