import React from 'react';
import './App.module.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends"
import {BrowserRouter, Route} from "react-router-dom";
import classes from "./App.module.css"
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";


const App = ( ) => {
    return (
    <BrowserRouter>
        <div className={classes.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={classes.appWrapperContent}>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/dialogs'
                       render={ () => <DialogsContainer/>}/>
                <Route path='/profile'
                       render={ () => <ProfileContainer/>}/>
                <Route path='/users'
                       render={ () => <UsersContainer/>}/>
                <Route path='/friends' render={ () => <Friends/>}/>
            </div>
        </div>
    </BrowserRouter>
    )
}
export default App;
