import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

import Post from '../Post/Post';

const postPage = props => {

  console.log(props);

  const { postId } = props.match.params;
  const post = props.posts.find(post => post.id === postId);

  let postDisplay = <div style={{textAlign: "center"}}><Spinner animation="border" /></div>;
  if(post) {
    postDisplay = <Post postData={post} extended={true} />;
  }
	
	return (
  <div>
    {postDisplay}
  </div>
  );
}

export default withRouter(postPage);