import React from 'react';
import {Redirect} from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import {reduxForm, Field} from 'redux-form';

const Dialogs = (props) => {
	let state = props.dialogsPage;
	
	let dialogsElements = state.dialogs
	.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);

	let messagesElements = state.messages
	.map(message => <Message text={message.message} key={message.id} />);

	let newMessageBody = state.newMessageBody;

	const addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
	}

	if (!props.isAuth) return <Redirect to={"/login"} />

	return (<div className={s.dialogs}>
				<div className={s.dialogsItems}>
					{dialogsElements}
				</div>
				<div className={s.messages}>
					<div>{messagesElements}</div>
					
				</div>
				<AddMessageFormRedux onSubmit={addNewMessage} />
			</div>
		)
}

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={"textarea"} name={"newMessageBody"}
				placeholder={"Enter your message"}/>
			</div>
			<div>
			<button>Send</button>
			</div>			
		</form>
	)
}

const AddMessageFormRedux = reduxForm({
  // a unique name for the form
  form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;






