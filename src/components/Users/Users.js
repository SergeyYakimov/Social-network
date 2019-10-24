import React from 'react';
import Paginator from './../common/Paginator/Paginator.js';
import User from './User.js';

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users,...props}) => {

	return <div>
			<Paginator currentPage={currentPage} 
			onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}
			pageSize={pageSize}/>
			<div>
				{users.map(u => 
					<User user={u} key={u.id}
						  followinginProgress={props.followinginProgress}
						  follow={props.follow} unfollow={props.unfollow}/>
				)}
			</div>
		</div>
}

export default Users;