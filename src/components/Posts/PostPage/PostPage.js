import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

import Post from '../Post/Post';

const postPage = props => {

  console.log(props);

  const { postId, langCode } = props.match.params;
  const post = props.posts.find(post => post.id === postId);

  let postDisplay = <div style={{textAlign: "center"}}><Spinner animation="border" /></div>;
  if(post) {
    if(langCode) {
      postDisplay = <Post postData={post} extended={true} selectedLanguage={langCode} />;
    } else {
      postDisplay = <Redirect to={props.location.pathname+"/"+post.langs[0]} />;
    }
  }

	
	return (
  <div>
    {postDisplay}
  </div>
  );
}

export default withRouter(postPage);