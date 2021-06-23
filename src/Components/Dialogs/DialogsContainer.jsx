import React from "react";
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

//Забираем стейт dialogsPage из dialogs-reducer
let mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage

    }
}

//Забираем из редьюсера action creator, который принимает
//новый текст и добавляет его в стейт

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch( sendMessageCreator(newMessageBody) );
        }
    }

}

// Compose коннекта с самописным хоком withAuthRedirect, и передача стейта и sendMessage
//в пропсы Dialogs

export default compose( connect( mapStateToProps, mapDispatchToProps ), withAuthRedirect )( Dialogs )
;