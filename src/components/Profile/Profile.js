import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.js';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
	return (
		<div>
		    <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} 
		    updateStatus={props.updateStatus}/>
		    <MyPostsContainer />
		</div>
		)
}

export default Profile;
