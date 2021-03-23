import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/img/no-avatar.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push( i );
    }
    return <div>
        {pages.map( page => {
            return <span className={props.currentPage === page ? styles.selectedPage : styles.uselectedPage}
                         onClick={(e) => {
                             props.onPageChanged( page );
                         }}>{page}  </span>
        } )}
        {
            props.users.map( user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ?
                            <button onClick={() => {
                                axios.delete( `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "842fcf68-1b9d-4e16-a7e5-e02cbf7809e4"
                                        }
                                    } )
                                    .then( response => {
                                        if (response.data.resultCode == 0) {

                                            props.unfollow( user.id )
                                        }
                                    } );
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                axios.post( `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "842fcf68-1b9d-4e16-a7e5-e02cbf7809e4"
                                        }
                                    } )
                                    .then( response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow( user.id )
                                        }
                                    } );


                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
            </div> )
        }
    </div>
}


export default Users