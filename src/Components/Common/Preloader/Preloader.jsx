import React from "react";
import Loader from "react-loader-spinner";
import classes from "./Preloader.module.css"

export default class Preloader extends React.Component {
    render() {
        return (
            <div className={classes.preloader}>
                <Loader type="Circles" color="aquamarine" height={80} width={80}/>
            </div>
        )
    }
}