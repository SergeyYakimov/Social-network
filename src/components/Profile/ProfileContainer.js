import React from 'react';
import style from './Profile.module.css';
import Profile from './Profile.js';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {getUserProfile} from './../../Redux/profile-reducer.js';
import {withRouter} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {usersAPI} from '../../api/api.js';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 1720;
		}
		this.props.getUserProfile(userId);
		/*usersAPI.getProfile(userId).then(response => {
			this.props.setUserProfile(response.data);
		});*/
		/*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
			this.props.setUserProfile(response.data);
		});*/
	}

	render() {
		if (!this.props.isAuth) return <Redirect to={"/login"} />
		return (
		    <Profile {...this.props} profile={this.props.profile}  />
		)
	}
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile, isAuth: state.auth.isAuth});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);