import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import styles from "./Users.module.css"

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return (<div>
        <div className={styles.usersPaginator}>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount}
                       pageSize={pageSize}/>
        </div>
        <div>
            {
                users.map( user => <User user={user}
                                         followingInProgress={props.followingInProgress}
                                         unfollow={props.unfollow}
                                         follow={props.follow}
                                         key={user.id}/> )
            }
        </div>
    </div>)
}


export default Users