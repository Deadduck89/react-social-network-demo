import React from "react";
import Profile from "./Profile";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 15681;
        }
        this.props.getUserProfile( userId );
        this.props.getStatus(userId);

    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status :state.profilePage.status
});

export default compose(
    connect( mapStateToProps, {getUserProfile, getStatus, updateStatus} ),
    withRouter )( ProfileContainer );
