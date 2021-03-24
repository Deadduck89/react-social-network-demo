import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../API/API";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 15681;
        }
        usersAPI.loadProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            })

    }

    render () {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
             }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})  (WithUrlDataContainerComponent);