import React from "react";
import preloader from "../../assets/loader/Spinner-1s-200px.svg";
import styles from "./Preloader.module.css";

let Preloader = () => {
    return <div>
        <img src={preloader} className={styles.loader}/>
    </div>
}

export default Preloader