import React from "react";
import styles from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, followed: false, name: 'Andrew', avatar: 'https://clck.ru/RaH6Z', status: 'What a nice day!', location: {country: 'Russia', city:'Moscow'}},
            {id: 2, followed: true, name: 'Igor', avatar: 'https://clck.ru/RQNNi',status: 'Looking for a job', location: {country: 'Russia', city:'Ekaterinburg' }},
            {id: 3, followed: true, name: 'Sergey', avatar: 'https://clck.ru/RaH7G',status: 'Playing', location: {country: 'Belarus', city:'Minsk'}},
            {id: 4, followed: false, name: 'Irina', avatar: 'https://clck.ru/RaH87',status: 'Feeling dangerous', location: {country: 'Russia', city:'Moscow'}},
            {id: 5, followed: true, name: 'Zhop', avatar: 'https://clck.ru/RhWYy',status: 'I am Zhop', location: {country: 'Zhop', city:'Zhopsk'}}
        ])}
    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.avatar} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {user.followed ?
                            <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> :
                            <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>

}

export default Users