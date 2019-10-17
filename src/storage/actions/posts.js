import axios from '../../axios/posts';

import * as actionTypes from './actionTypes';


export const fetchPostStart = () => {
	return {
		type: actionTypes.FETCH_POST_START
	};
};

export const fetchPostSuccess = (postId, post) => {
	return {
		type: actionTypes.FETCH_POST_SUCCESS,
		post: post,
		fetchedPost: postId
	};
};

export const fetchPostFail = (error) => {
	return {
		type: actionTypes.FETCH_POST_FAIL,
		error: error
	};
};


export const fetchPost = ( postId ) => {
	return dispatch => {
		dispatch(fetchPostStart());
		console.log("desto");
		axios.get('https://pastowo.com/api/paste/single?token=token&id='+postId)
			.then( res => {
				dispatch(fetchPostSuccess(postId, res.data));
			})
			.catch( err => {
				console.log(err);
				dispatch(fetchPostFail());
			});
	}
}