import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/img/no-avatar.png";
import {NavLink} from "react-router-dom";
import Button from "../Common/Button/Button";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return <div className={styles.userList}>
        <span>
                    <div className={styles.user}>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto} alt="user_photo"/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ?
                            <Button type="unfollow" disabled={followingInProgress.some( id => id === user.id )} onClick={() => {
                                unfollow( user.id )
                            }
                            }/> :
                            <Button type="follow" disabled={followingInProgress.some( id => id === user.id )} onClick={() => {
                                follow( user.id )
                            }
                            }/>}
                    </div>
                </span>
        <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                </span>
    </div>
}


export default User