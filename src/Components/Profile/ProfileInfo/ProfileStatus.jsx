import React from "react";
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () =>{
        this.setState({
            editMode:true
        });
    }
    deactivateEditMode = () =>{
        this.setState({
            editMode:false
        });
        this.props.updateStatus(this.state.status)
    }
    onStateChange = (e) => {
        this.setState({
            status:e.currentTarget.value
        })
    }


    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                    </div>}
            </div>
        )
    }

}

export default ProfileStatus