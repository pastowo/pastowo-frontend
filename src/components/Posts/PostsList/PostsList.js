import React, { Fragment } from 'react';

import Post from '../Post/Post';

const postsList = props => {
  let posts = <h2>No posts to display</h2>;
  if(props.postsList) {
    posts = props.postsList.map(post => {
      return ( <Post
        key={'post'+post.id}
        postData={post} />);
    });
  }
  return (
    <Fragment>
      {
        posts 
      }
    </Fragment>
  );
}

export default postsList;