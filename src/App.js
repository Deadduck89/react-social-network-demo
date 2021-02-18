import React from 'react';
import './App.module.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends"
import {BrowserRouter, Route} from "react-router-dom";
import classes from "./App.module.css"
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


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
                       render={ () => <DialogsContainer
                           store={props.store}/>}/>
                <Route path='/profile'
                       render={ () => <Profile
                           store={props.store}/>}/>
                <Route path='/friends' component={Friends}/>
            </div>
        </div>
    </BrowserRouter>
    )
}
export default App;
