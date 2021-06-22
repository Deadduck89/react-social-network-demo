import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

//Получаем из стейта данные о том, залогинен ли пользователь

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

//Хок, который принимает в себя компонент и отображает его, только
//если пользователь залогинен, иначе отправляет на страничку логина

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>;
            return <Component {...this.props}/>;
        }
    }
    let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent;
}