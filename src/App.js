import React from 'react';
import './App.module.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends"
import {BrowserRouter, Route} from "react-router-dom";
import classes from "./App.module.css"


const App = (props) => {
    console.log(props)
    return (
    <BrowserRouter>
        <div className={classes.appWrapper}>
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className={classes.appWrapperContent}>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/dialogs'
                       render={ () => <Dialogs
                           state={props.state.dialogsPage}
                            addMessage={props.addMessage}/>}/>
                <Route path='/profile'
                       render={ () => <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch}/>}/>
                <Route path='/friends' component={Friends}/>
            </div>
        </div>
    </BrowserRouter>
    )
}
export default App;
