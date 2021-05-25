import React, {Suspense} from 'react';
import './App.module.css';
import Navbar from "./Components/Navbar/Navbar";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends"
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import classes from "./App.module.css"
import UsersContainer from "./Components/Users/UsersContainer.jsx";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/Common/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy( () => import('.//Components/Dialogs/DialogsContainer') );
const ProfileContainer = React.lazy( () => import('./Components/Profile/ProfileContainer') );
const LoginPage = React.lazy( () => import('./Components/Login/Login') );


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className={classes.appWrapper}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={classes.appWrapperContent}>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Suspense fallback={<Preloader/>}>
                            <Route path='/dialogs'
                                   render={() =>
                                       <DialogsContainer/>}/>
                            <Route path='/profile/:userId?'
                                   render={() => <ProfileContainer/>}/>
                            <Route path='/login' render={() => <LoginPage/>}/>
                        </Suspense>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/friends' render={() => <Friends/>}/>

                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose( withRouter, connect( mapStateToProps, {initializeApp} ) )( App );

const SamuraiJSApp = (props) => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <AppContainer/>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    )
}

export default SamuraiJSApp;
