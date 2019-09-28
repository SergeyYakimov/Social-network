import React from 'react';
import Dialogs from './Dialogs.js';
import {sendMessageCreator, updateNewMessageBodyCreator} from './../../Redux/dialogs-reducer.js';
import {connect} from 'react-redux';
import {withAuthRedirect} from './../../hoc/withAuthRedirect.js';
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);
	/*if (!this.props.isAuth) return <Redirect to={"/login"} />
	return <Dialogs {...props} />
}*/

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;