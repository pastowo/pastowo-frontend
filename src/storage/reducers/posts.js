import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

export const initialState = {
	postsToFetch: [742, 777, 791, 1, 345],
	posts: [],
	loading: false
}

const fetchPostStart = (state, action) => {
	return updateObject(state, { loading: true });
}

const fetchPostSuccess = (state, action) => {
	return updateObject(state, {
		loading: false,
		postsToFetch : state.postsToFetch.filter(num => num !== action.fetchedPost),
		posts: [
			...state.posts,
			action.post
		]
	});
}

const fetchPostFail = (state, action) => {
	return updateObject(state, {error:action.error, loading: false});
}

const reducer = (state = initialState, action) => {
	console.log(action);
	switch(action.type) {
		case actionTypes.FETCH_POST_START: return fetchPostStart(state, action);
		case actionTypes.FETCH_POST_SUCCESS: return fetchPostSuccess(state, action);
		case actionTypes.FETCH_POST_FAIL: return fetchPostFail(state, action);
		default: return state;
	}
}

export default reducer;