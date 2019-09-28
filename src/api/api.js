import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "8771effe-99ba-4a6f-b9dd-e8ed7fce0c66"
	}
});

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
			return response.data
		})
	},
	follow(userId) {
		return instance.post(`follow/${userId}`)

	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
	},
	getProfile(userId) {
		return instance.get(`profile/${userId}`)
	}
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
	}
}

/*export const getUsers = (currentPage, pageSize) => {
	return instance.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response => {
			return response.data
		})
}*/

