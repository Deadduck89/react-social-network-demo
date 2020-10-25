import React from "react";
import classes from './Navbar.module.css';
import {NavLink, Route} from "react-router-dom";
import BestFriends from "./BestFriends/BestFriends";

const Navbar = (props) => {
    return (
        <div>
        <nav className={classes.nav}>
            <div className={classes.item}>
                    <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
            </div>
            <div className={classes.friends}>
                <NavLink to='/friends' activeClassName={classes.active}>Friends</NavLink>
            </div>
            <div>
                <BestFriends state={props.state}/>
            </div>
        </nav>


        </div>
    )
}

export default Navbar
