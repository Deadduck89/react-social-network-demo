import React from "react";
import Profile from "./Profile";
import {getStatus, getUserProfile, savePhoto, updateStatus, saveProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



class ProfileContainer extends React.Component {

    //Метод для запроса профиля и статуса по userId в адресной строке, если userId
    // нет, то загрузится информация залогиненного пользователя
    refreshProfile () {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile( userId );
        this.props.getStatus(userId);
    }

    //При монтировании компонент запросит инфу для отрисовки страницы профиля

    componentDidMount() {
        this.refreshProfile ();
    }

    //При обновлении страницы сравнивается прошлый Id с новым, если они отличаются,
    // то компонент обновится
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
        this.refreshProfile ();}
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                    isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         savePhoto={ this.props.savePhoto}/>
            </div>
        )
    }
}

//Из стейта получаем текущий профиль и статус из profile-reducer, залогинен ли
// пользователь и его Id  из auth-reducer

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status :state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

//Объединяем самописный хок, который перенаправляет юзера на страницу логина,
//если он не залогинен, реактовский хок коннект, передаем в пропсы стейт и санки,
//которые получают данные профиля, статуса, меняют статус, отправляют новое фото
//меняют данные профиля

export default compose(withAuthRedirect,
    connect( mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} ),
    withRouter )( ProfileContainer );
