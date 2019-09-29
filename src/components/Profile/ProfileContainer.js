import React from 'react';
import Profile from './Profile.js';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getUserProfile} from './../../Redux/profile-reducer.js';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect.js';

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
		
		return (
		    <Profile {...this.props} profile={this.props.profile}  />
		)
	}
}

//compose(connect(mapStateToProps, {getUserProfile}),withRouter,withAuthRedirect)(ProfileContainer);

/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer);*/

	/*if (!this.props.isAuth) return <Redirect to={"/login"} />
	return <ProfileContainer {...props} />
}*/

let mapStateToProps = (state) => ({profile: state.profilePage.profile});

//let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default compose(connect(mapStateToProps, {getUserProfile}),withRouter,withAuthRedirect)(ProfileContainer);