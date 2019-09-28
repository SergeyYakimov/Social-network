import React from 'react';
import Dialogs from './Dialogs.js';
import {sendMessageCreator, updateNewMessageBodyCreator} from './../../Redux/dialogs-reducer.js';
import {connect} from 'react-redux';
/*const DialogsContainer = (props) => {
	

	return <StoreContext.Consumer> 
	{
		(store) => {
			let state = store.getState().dialogsPage;

			let onSendMessageClick = () => {
				store.dispatch(sendMessageCreator());
			};

			let onNewMessageChange = (body) => {
				store.dispatch(updateNewMessageBodyCreator(body));
			};
			return <Dialogs dialogsPage={state} updateNewMessageBody={onNewMessageChange} 
		sendMessage={onSendMessageClick} />
		}
		
	}
	</StoreContext.Consumer>
}*/
let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
		isAuth: state.auth.isAuth
		}
}

let mapDispatchToProps = (dispatch) => {
	return {
			updateNewMessageBody: (body) => {
				dispatch(updateNewMessageBodyCreator(body));
			},
			sendMessage: () => {
				dispatch(sendMessageCreator());
			}
		}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;