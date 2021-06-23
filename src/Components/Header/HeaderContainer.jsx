import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

    //Отрисовываем компонент Header,
    //копируя в него пропсы контейнера

    render() {
        return <Header {...this.props}/>
    }
}

//Из auth-reducer забираем состояние логина,
//и сам логин пользователя
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

//Отправляем в пропсы стейт и санку logout, которая
//отправляет тот же объект, что и login, но все
//значения там - null

export default connect(mapStateToProps,{ logout})(HeaderContainer)