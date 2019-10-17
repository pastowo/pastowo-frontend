import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import PostsList from '../../components/Posts/PostsList/PostsList';
import PostPage from '../../components/Posts/PostPage/PostPage';
import * as actions from '../../storage/actions/index';

class PostsContainer extends Component {

	componentDidMount() {
		// console.log(this.props);
		this.props.toFetch.forEach((id) => {
			if(!this.props.posts[id]) {
				this.props.fetchPost(id);
			}
			console.log(id);
		});
	}

	render() {
			console.log("Posts CONTAINER ", this.props);
		return(
			<Fragment>
				
				<Switch>
					<Route path='/' exact component={() => <PostsList postsList={this.props.posts} />} />
					<Route path='/home' exact component={() => <PostsList postsList={this.props.posts} />} />
					<Route path='/home/:pageNum' component={() => <PostsList postsList={this.props.posts} />} />
	        <Route
						path='/paste/:postId/:langCode'
					component={() => { return <PostPage posts={this.props.posts} />}} />
	        <Route
						path='/paste/:postId'
					component={() => { return <PostPage posts={this.props.posts} />}} />
				</Switch>
			</Fragment>
		);
}
}

const mapStateToProps = state => {
	return {
		toFetch: state.posts.postsToFetch,
		posts: state.posts.posts,
		loadingPosts: state.posts.loading
	}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: (postId) => dispatch(actions.fetchPost(postId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);