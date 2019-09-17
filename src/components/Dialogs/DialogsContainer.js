import React from 'react';
import Dialogs from './Dialogs.js';
import {sendMessageCreator, updateNewMessageBodyCreator} from './../../Redux/dialogs-reducer.js';

const DialogsContainer = (props) => {
	let state = props.store.getState().dialogsPage;

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	};

	let onNewMessageChange = (body) => {
		props.store.dispatch(updateNewMessageBodyCreator(body));
	};

	return <Dialogs dialogsPage={state} updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} />
}

export default DialogsContainer;