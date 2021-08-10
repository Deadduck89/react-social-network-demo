import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    //Хуки useState для состояния режима редактирования и измения статуса

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    //Хук useEffect для изменения локального стейта при изменении статуса
    //на сервере

    useEffect(()=> {
        setStatus(props.status);
    }, [props.status])

    //Функция для включения режима редактирования

    const activateEditMode = () => {
        setEditMode(true)
    }

    //Функция для отключения режима редактирования и отправки статуса на сервер
    const deactivateEditMode = () =>{
        setEditMode(false)
        props.updateStatus(status);
    }

    //Функция для посимвольного изменения состояния локального стейта статуса
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "..."}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={status}/>
                </div>}
        </div>
    )
}

export default ProfileStatusWithHooks
